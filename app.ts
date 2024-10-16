import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000;

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
