import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlacklistServiceBase } from "./base/blacklist.service.base";

@Injectable()
export class BlacklistService extends BlacklistServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
