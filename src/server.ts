import { Configuration, Inject } from "@tsed/di";
import { PlatformApplication } from "@tsed/common";
import { TestController } from "~/controllers/test/TestController";

@Configuration({
  acceptMimes: ["application/json"],
  mount: {
    "/": [TestController],
  },
})
export class Server {
  @Inject()
  app: PlatformApplication;

  @Configuration()
  settings: Configuration;
}
