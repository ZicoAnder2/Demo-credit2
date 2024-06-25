import { Module } from "@nestjs/common";
import { BlacklistModuleBase } from "./base/blacklist.module.base";
import { BlacklistService } from "./blacklist.service";
import { BlacklistController } from "./blacklist.controller";
import { BlacklistResolver } from "./blacklist.resolver";

@Module({
  imports: [BlacklistModuleBase],
  controllers: [BlacklistController],
  providers: [BlacklistService, BlacklistResolver],
  exports: [BlacklistService],
})
export class BlacklistModule {}
