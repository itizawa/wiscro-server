import { Get } from "@tsed/schema";
import { Controller } from "@tsed/di";

@Controller("/test")
export class TestController {
  @Get()
  findAll(): string {
    return "This action returns all calendars";
  }
}
