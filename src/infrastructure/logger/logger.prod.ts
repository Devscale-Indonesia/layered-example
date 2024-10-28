import { injectable } from "inversify";
import { winstonLogger } from "../../utils/winston";
import "reflect-metadata";

@injectable()
export class LoggerProd {
  info(message: string) {
    winstonLogger.info(`Logger Prod: ${message}`);
  }
}
