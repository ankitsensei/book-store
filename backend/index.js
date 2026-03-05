import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = process.env.PORT;
const mongoDBURL = process.env.mongoDBURL;

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Hello from server");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
