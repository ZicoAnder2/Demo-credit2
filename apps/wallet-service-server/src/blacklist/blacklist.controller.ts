import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlacklistService } from "./blacklist.service";
import { BlacklistControllerBase } from "./base/blacklist.controller.base";

@swagger.ApiTags("blacklists")
@common.Controller("blacklists")
export class BlacklistController extends BlacklistControllerBase {
  constructor(protected readonly service: BlacklistService) {
    super(service);
  }
}
