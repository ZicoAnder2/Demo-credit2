import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "fromAccount";

export const TransactionTitle = (record: TTransaction): string => {
  return record.fromAccount?.toString() || String(record.id);
};
