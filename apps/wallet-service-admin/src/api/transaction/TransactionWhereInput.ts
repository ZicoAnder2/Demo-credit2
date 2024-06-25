import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  fromAccount?: StringNullableFilter;
  id?: StringFilter;
  toAccount?: StringNullableFilter;
  typeField?: "Option1";
};
