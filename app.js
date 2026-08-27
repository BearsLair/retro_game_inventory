const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

try {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
} catch (error) {
  console.error("Error starting application: ", error);
}
