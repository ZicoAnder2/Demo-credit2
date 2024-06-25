export type Transaction = {
  amount: number | null;
  createdAt: Date;
  fromAccount: string | null;
  id: string;
  toAccount: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
