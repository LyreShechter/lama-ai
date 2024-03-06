import express, { Request } from "express";
import { Loan } from "./types";
import { sortedLendersByConstraints } from "./lenders";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/applicationMatch", (req: Request<{}, {}, Loan>, res) => {
  // Should validate body?
  const loan: Loan = req.body;

  const prioritizedLenders = [];

  // Find lenders by priority until we have 2 lenders
  for (
    let i = 0;
    i < sortedLendersByConstraints.length && prioritizedLenders.length < 2;
    i++
  ) {
    const lender = sortedLendersByConstraints[i];

    // Check if all constraints are fulfilled
    if (
      lender.constraints.every((constraintFunction) => constraintFunction(loan))
    )
      prioritizedLenders.push(lender.name);
  }

  // Send response
  res.send(prioritizedLenders);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
