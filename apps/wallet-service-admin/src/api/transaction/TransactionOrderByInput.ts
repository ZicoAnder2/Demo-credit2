import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  fromAccount?: SortOrder;
  id?: SortOrder;
  toAccount?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
