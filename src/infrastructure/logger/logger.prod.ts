import { winstonLogger } from "../../utils/winston";

export class LoggerProd {
  info(message: string) {
    winstonLogger.info(`Logger Prod: ${message}`);
  }
}
