import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  balance?: number | null;
  user?: UserWhereUniqueInput | null;
};
