type BorrowerType = "consumer" | "business";

type LoanType =
  | "Student Loan"
  | "equipment financing loan"
  | "working capital loan"
  | "term loan"
  | "Line of Credit"
  | "SBA Loan";

export type Loan = {
  requestedAmount: number;
  borrowerType: BorrowerType;
  loanType: LoanType;
  industry: string; // Generally should be more type-safe
  state: string; // Generally should be more type-safe
  riskLevel: number;
};

type LenderConstraintFunction = (loan: Loan) => boolean;

export type Lender = {
  name: string;
  constraints: Array<LenderConstraintFunction>;
};
