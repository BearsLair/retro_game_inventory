const { body } = require("express-validator");

exports.validators = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Game name cannot be empty")
    .isLength({ max: 25 })
    .withMessage("Name must 25 characters or less"),
  body("system")
    .trim()
    .notEmpty()
    .withMessage("Console abbreviation cannot be empty")
    .isLength({ max: 3 })
    .withMessage("Console name must be a 3 character abbreviation"),
  body("quantity")
    .trim()
    .notEmpty()
    .withMessage("Quantity cannot be empty")
    .isLength({ max: 5 })
    .withMessage("Quantity must contain 5 or less numbers")
    .isInt()
    .withMessage("Quantity must be a number"),
  body("price")
    .trim()
    .notEmpty()
    .withMessage("Price cannot be empty")
    .isLength({ max: 8 })
    .withMessage("Price must 7 numbers or less")
    .isCurrency({ require_decimal: true })
    .withMessage(
      "Price must contain dollars and cents (no $ sign), for example: 15.25",
    ),
  body("developer")
    .trim()
    .notEmpty()
    .withMessage("Developer cannot be empty")
    .isLength({ max: 25 })
    .withMessage("Developer must 25 characters or less"),
  body("publisher")
    .trim()
    .notEmpty()
    .withMessage("Publisher cannot be empty")
    .isLength({ max: 25 })
    .withMessage("Publisher must 25 characters or less"),
  body("genre")
    .trim()
    .notEmpty()
    .withMessage("Genre cannot be empty")
    .isLength({ max: 25 })
    .withMessage("Genre must 25 characters or less"),
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Year cannot be empty")
    .isLength({ min: 4, max: 4 })
    .withMessage("Year must be a valid 4 digit year")
    .isInt()
    .withMessage("Year must be a valid year"),
];
