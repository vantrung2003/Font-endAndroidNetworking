const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://trungtvph19997:rj98fWKWS9CjY3q9@trung.yrnyfzo.mongodb.net/Imagedatabase")
  .then(() => console.log("connected successfully"))
  .catch((err) => console.log("connected failure"));

module.exports = {
  mongoose
};