// controllers/expense.controller.js
import Expense from "../models/expense.model.js";

export const addExpense = async (req, res) => {

 console.log("Expense request received:", req.body, req.user);

  const { category, amount } = req.body;

  if (!category || !amount) {
    return res.status(400).json({ error: "All fields required" });
  }
const createdAt = req.body.createdAt ? new Date(req.body.createdAt) : new Date();
  const newExpense = new Expense({
    userId: req.user._id,
    category,
    amount,
    createdAt,
  });

  await newExpense.save();

  res.status(201).json(newExpense);
};

export const getExpenses = async (req, res) => {
  const expenses = await Expense.find({ userId: req.user._id }).sort({ date: -1 });
  res.status(200).json(expenses);
};

export const getExpenseStats = async (req, res) => {
  const now = new Date();
  const oneDayAgo = new Date(now);
  const oneWeekAgo = new Date(now);
  const oneMonthAgo = new Date(now);

  oneDayAgo.setDate(now.getDate() - 1);
  oneWeekAgo.setDate(now.getDate() - 7);
  oneMonthAgo.setMonth(now.getMonth() - 1);

  const match = { userId: req.user._id };

  const aggregateByTime = async (startDate) => {
    return Expense.aggregate([
      { $match: { ...match, date: { $gte: startDate } } },
      { $group: { _id: "$category", total: { $sum: "$amount" } } },
    ]);
  };

  const [daily, weekly, monthly] = await Promise.all([
    aggregateByTime(oneDayAgo),
    aggregateByTime(oneWeekAgo),
    aggregateByTime(oneMonthAgo),
  ]);

  res.status(200).json({ daily, weekly, monthly });
};

// DELETE /api/expenses/:id
export const deleteExpense = async (req, res) => {
  try {

    console.log("deletion start");
    const { id } = req.params;
    const userId = req.user._id;

const deleted = await Expense.findOneAndDelete({
  _id: id,
  userId: userId,
});

    if (!deleted) {
      return res.status(404).json({ error: "Expense not found or not authorized" });
    }

    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("Error deleting expense:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}; 