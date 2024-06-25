/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Blacklist } from "./Blacklist";
import { BlacklistCountArgs } from "./BlacklistCountArgs";
import { BlacklistFindManyArgs } from "./BlacklistFindManyArgs";
import { BlacklistFindUniqueArgs } from "./BlacklistFindUniqueArgs";
import { CreateBlacklistArgs } from "./CreateBlacklistArgs";
import { UpdateBlacklistArgs } from "./UpdateBlacklistArgs";
import { DeleteBlacklistArgs } from "./DeleteBlacklistArgs";
import { BlacklistService } from "../blacklist.service";
@graphql.Resolver(() => Blacklist)
export class BlacklistResolverBase {
  constructor(protected readonly service: BlacklistService) {}

  async _blacklistsMeta(
    @graphql.Args() args: BlacklistCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Blacklist])
  async blacklists(
    @graphql.Args() args: BlacklistFindManyArgs
  ): Promise<Blacklist[]> {
    return this.service.blacklists(args);
  }

  @graphql.Query(() => Blacklist, { nullable: true })
  async blacklist(
    @graphql.Args() args: BlacklistFindUniqueArgs
  ): Promise<Blacklist | null> {
    const result = await this.service.blacklist(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Blacklist)
  async createBlacklist(
    @graphql.Args() args: CreateBlacklistArgs
  ): Promise<Blacklist> {
    return await this.service.createBlacklist({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Blacklist)
  async updateBlacklist(
    @graphql.Args() args: UpdateBlacklistArgs
  ): Promise<Blacklist | null> {
    try {
      return await this.service.updateBlacklist({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Blacklist)
  async deleteBlacklist(
    @graphql.Args() args: DeleteBlacklistArgs
  ): Promise<Blacklist | null> {
    try {
      return await this.service.deleteBlacklist(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
