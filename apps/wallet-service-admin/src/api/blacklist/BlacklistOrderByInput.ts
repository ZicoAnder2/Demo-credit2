import { SortOrder } from "../../util/SortOrder";

export type BlacklistOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  reason?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
