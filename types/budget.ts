type Budget = {
  id: string;
  userid: string;
  name: string;
  limit: number;
  year: number;
  month: number;
};

type Budgets = Budget[];

export type { Budget, Budgets };
