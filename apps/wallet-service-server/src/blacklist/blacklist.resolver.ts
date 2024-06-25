import * as graphql from "@nestjs/graphql";
import { BlacklistResolverBase } from "./base/blacklist.resolver.base";
import { Blacklist } from "./base/Blacklist";
import { BlacklistService } from "./blacklist.service";

@graphql.Resolver(() => Blacklist)
export class BlacklistResolver extends BlacklistResolverBase {
  constructor(protected readonly service: BlacklistService) {
    super(service);
  }
}
