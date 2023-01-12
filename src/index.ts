import express, { Request, Response, NextFunction } from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("index.html");
  } catch (error) {
    next(error);
  }
});

const jsonData = require("./data.json");
app.get("/data", (req: Request, res: Response, next: NextFunction): void => {
  res.json(jsonData);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
