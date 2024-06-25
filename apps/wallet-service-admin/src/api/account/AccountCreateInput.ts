import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  balance?: number | null;
  user?: UserWhereUniqueInput | null;
};
