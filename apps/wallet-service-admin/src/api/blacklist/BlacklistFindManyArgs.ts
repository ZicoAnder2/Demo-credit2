import { BlacklistWhereInput } from "./BlacklistWhereInput";
import { BlacklistOrderByInput } from "./BlacklistOrderByInput";

export type BlacklistFindManyArgs = {
  where?: BlacklistWhereInput;
  orderBy?: Array<BlacklistOrderByInput>;
  skip?: number;
  take?: number;
};
