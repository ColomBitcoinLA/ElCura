const Book = require("../models/Book");

const listBooks = async (req, res, next) => {
  try {
    const books = await Book.find().select("title description coverImage isPremium");
    res.json(books);
  } catch (error) {
    next(error);
  }
};

const getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

module.exports = { listBooks, getBook, createBook };
