import { NoteRepo } from "../database/note.repo";
import { NoteService } from "../../application/note.service";
import { LoggerDev } from "../logger/logger.dev";
import { LoggerProd } from "../logger/logger.prod";

const loggerDev = new LoggerDev();
const loggerProd = new LoggerProd();

const logger = process.env.NODE_ENV === "development" ? loggerDev : loggerProd;

const noteRepo = new NoteRepo();
// Dependency Injection
export const noteService = new NoteService(noteRepo, logger);
