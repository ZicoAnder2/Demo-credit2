import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BlacklistWhereInput = {
  id?: StringFilter;
  reason?: StringNullableFilter;
  userId?: IntNullableFilter;
};
