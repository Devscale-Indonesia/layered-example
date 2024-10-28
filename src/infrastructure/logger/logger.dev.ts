import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class LoggerDev {
  info(message: string) {
    console.log(`Logger DEV: ${message}`);
  }
}
