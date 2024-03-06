type ConstraintType = "QueryBuilder" | "CustomFunction";

type Constraint = {
  id: number;
  constraintType: ConstraintType;
  constraintId: number;
};

type QueryBuilderConstraint = {
  field: string;
  operator: string;
  value: string | number | boolean | null;
};
