import { useEffect, useState } from "react";
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

ChartJS.register(PieController, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const ExpenseTracker = ({ className = "" }) => {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({ category: "", amount: "" });
  const [summary, setSummary] = useState({ daily: [], weekly: [], monthly: [] });
  const [isClient, setIsClient] = useState(false);
  const [selectedChartType, setSelectedChartType] = useState("daily");

  const API_BASE = "http://localhost:5000/api/expenses";

  useEffect(() => {
    setIsClient(true);
    fetchExpenses();
    fetchSummary();
  }, []);

  const fetchExpenses = async () => {
    try {
      const res = await fetch(API_BASE, { credentials: "include" });
      const data = await res.json();
      setExpenses(data);
    } catch (err) {
      console.error("Failed to fetch expenses:", err);
    }
  };

  const fetchSummary = async () => {
    try {
      const res = await fetch(`${API_BASE}/stats`, { credentials: "include" });
      const data = await res.json();
      setSummary(data);
    } catch (err) {
      console.error("Failed to fetch summary:", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { category, amount } = formData;
    if (!category || !parseFloat(amount)) return;

    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ category, amount: parseFloat(amount) }),
      });
      const data = await res.json();
      setExpenses((prev) => [data, ...prev]);
      setFormData({ category: "", amount: "" });
      fetchSummary();
    } catch (err) {
      console.error("Failed to submit expense:", err);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete expense");

      setExpenses((prev) => prev.filter((expense) => expense._id !== id));
      fetchSummary();
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const totalExpense = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const selectedSummary = summary[selectedChartType] || [];

  const chartData = {
    labels: selectedSummary.map((item) => item._id),
    datasets: [
      {
        label: "Expenses",
        data: selectedSummary.map((item) => item.total),
        backgroundColor: [
          "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
        ],
        borderWidth: 1,
      },
    ],
  };

  const renderSummaryTable = (title, data) => (
    <div className="bg-white text-gray-800 rounded-lg shadow-md p-4 w-full lg:w-[300px]">
      <h3 className="text-xl font-bold mb-2">{title} Summary</h3>
      {data.length === 0 ? (
        <p className="text-gray-500">No data</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-b">
                <td>{item._id}</td>
                <td>${item.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  return (
    
    <section className={`flex flex-col lg:flex-row flex-wrap items-start justify-evenly gap-8 w-full max-w-screen-xl mx-auto p-6 bg-cadetblue rounded-2xl shadow-lg text-white font-poppins ${className}`}>
      {/* Add Expense */}
      <div className="flex-1 max-w-sm bg-white text-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Log Your Expense</h2>
        <form onSubmit={handleFormSubmit}>
          <label className="block text-sm mb-2">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          >
            <option value="" disabled>Select a category</option>
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

          <button type="submit" className="bg-cadetblue text-white px-4 py-2 rounded shadow hover:bg-cadetblue-dark w-full">
            Add Expense
          </button>
        </form>
      </div>

      {/* Expense List */}
      <div className="flex-1 max-w-lg bg-white text-gray-800 rounded-lg shadow-md p-6 overflow-auto hide-scrollbar">
        <h2 className="text-xl font-bold mb-4">Expense List</h2>
        <div className="max-h-[300px] overflow-y-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-cadetblue text-white">
                <th className="p-2">Category</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, idx) => (
                <tr key={idx} className="text-center border-b">
                  <td className="p-2">
                    <div>{expense.category}</div>
                    <small className="text-xs text-gray-500 block">
                      {new Date(expense.date).toLocaleString()}
                    </small>
                  </td>
                  <td className="p-2">${expense.amount.toFixed(2)}</td>
                  <td className="p-2">
                    <button
                      onClick={() => handleDeleteExpense(expense._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {expenses.length === 0 && (
                <tr>
                  <td className="p-2 text-center" colSpan="3">No expenses yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {expenses.length > 0 && (
          <div className="mt-4 font-bold text-center text-lg">
            Total: ${totalExpense.toFixed(2)}
          </div>
        )}
      </div>

      {/* Pie Chart with Dropdown */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-md text-gray-800">
        <div className="mb-4">
          <label className="mr-2 font-semibold">View:</label>
          <select
            value={selectedChartType}
            onChange={(e) => setSelectedChartType(e.target.value)}
            className="p-1 border rounded"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        {isClient && (
          <div className="w-[250px] h-[250px]">
            <Chart type="pie" data={chartData} />
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="w-full flex flex-col lg:flex-row gap-6 justify-between">
        {renderSummaryTable("Daily", summary.daily)}
        {renderSummaryTable("Weekly", summary.weekly)}
        {renderSummaryTable("Monthly", summary.monthly)}
      </div>
    </section>
  );
};

ExpenseTracker.propTypes = {
  className: PropTypes.string,
};

export default ExpenseTracker;
