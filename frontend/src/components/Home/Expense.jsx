import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
  PieController,
} from "chart.js";

// Register Chart.js components
ChartJS.register(PieController, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const Section3 = ({ className = "" }) => {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({ category: "", amount: "" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.category && parseFloat(formData.amount)) {
      setExpenses((prevExpenses) => {
        const existingExpenseIndex = prevExpenses.findIndex(
          (exp) => exp.category === formData.category
        );

        if (existingExpenseIndex !== -1) {
          const updatedExpenses = [...prevExpenses];
          updatedExpenses[existingExpenseIndex].amount += parseFloat(formData.amount);
          return updatedExpenses;
        } else {
          return [...prevExpenses, { category: formData.category, amount: parseFloat(formData.amount) }];
        }
      });
      setFormData({ category: "", amount: "" });
    }
  };

  const handleDeleteExpense = (category) => {
    setExpenses(expenses.filter((expense) => expense.category !== category));
  };

  const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const chartData = {
    labels: expenses.map((expense) => expense.category),
    datasets: [
      {
        label: "Expenses",
        data: expenses.map((expense) => expense.amount),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section
      className={`flex flex-col lg:flex-row items-start justify-evenly w-full max-w-screen-xl mx-auto p-6 bg-cadetblue rounded-2xl shadow-lg text-lg text-white font-poppins gap-8 ${className}`}
    >
      <div className="flex-1 max-w-sm bg-white text-gray-800 rounded-lg shadow-md p-6 mb-6 lg:mb-0">
        <h2 className="text-2xl font-bold mb-4">Log Your Expense</h2>
        <form onSubmit={handleFormSubmit}>
          <label className="block text-sm mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transportation">Transportation</option>
            <option value="Utilities">Utilities</option>
            <option value="Other">Other</option>
          </select>

          <label className="block text-sm mb-2">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
            placeholder="Amount spent"
          />

          <button
            type="submit"
            className="bg-cadetblue text-white px-4 py-2 rounded shadow hover:bg-cadetblue-dark w-full"
          >
            Add Expense
          </button>
        </form>
      </div>

      <div className="flex-1 max-w-lg bg-white text-gray-800 rounded-lg shadow-md p-6 mb-6 lg:mb-0">
        <h2 className="text-xl font-bold mb-4">Expense List</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-cadetblue text-white">
              <th className="p-2">Category</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} className="text-center border-b">
                <td className="p-2">{expense.category}</td>
                <td className="p-2">${expense.amount.toFixed(2)}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDeleteExpense(expense.category)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {expenses.length === 0 && (
              <tr>
                <td className="p-2 text-center" colSpan="3">
                  No expenses added yet.
                </td>
              </tr>
            )}
          </tbody>
          {expenses.length > 0 && (
            <tfoot>
              <tr className="bg-cadetblue font-bold">
                <td className="p-3 text-center">Total</td>
                <td className="p-3 text-center">${totalExpense.toFixed(2)}</td>
                <td></td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>

      <div className="flex-1 flex items-center justify-center bg-white rounded-lg p-6 shadow-md">
        {isClient && (
          <div className="w-[300px] h-[300px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
            <Chart type="pie" data={chartData} />
          </div>
        )}
      </div>
    </section>
  );
};

Section3.propTypes = {
  className: PropTypes.string,
};

export default Section3;
