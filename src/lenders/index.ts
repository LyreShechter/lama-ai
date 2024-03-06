import { Lender, Loan } from "../types";

const lenders: Array<Lender> = [
  {
    name: "First Lama Bank",
    constraints: [
      (loan: Loan) => loan.borrowerType === "consumer",
      (loan: Loan) => loan.riskLevel < 80,
    ],
  },
  {
    name: "Bank HaPoalama",
    constraints: [
      (loan: Loan) => loan.loanType === "Student Loan",
      (loan: Loan) => loan.state === "CA",
      (loan: Loan) => loan.riskLevel < 60,
    ],
  },
  {
    name: "Salt and Pepper",
    constraints: [
      (loan: Loan) => loan.borrowerType === "business",
      (loan: Loan) => loan.requestedAmount > 500 * 1000,
      (loan: Loan) => loan.riskLevel < 80,
    ],
  },
  {
    name: "Bank Otzar Halama",
    constraints: [
      (loan: Loan) => loan.loanType === "Line of Credit",
      (loan: Loan) => loan.industry === "restaurant",
    ],
  },
  {
    name: "Lama International Bank",
    constraints: [(loan: Loan) => loan.requestedAmount < 200 * 1000],
  },
];

// Order lenders from most constraints to least
export const sortedLendersByConstraints = [...lenders].sort(
  (lenderA, lenderB) => lenderB.constraints.length - lenderA.constraints.length
);
