import { Blacklist as TBlacklist } from "../api/blacklist/Blacklist";

export const BLACKLIST_TITLE_FIELD = "id";

export const BlacklistTitle = (record: TBlacklist): string => {
  return record.id?.toString() || String(record.id);
};
