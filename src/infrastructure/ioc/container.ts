import { Container } from "inversify";
import { NoteRepo } from "../database/note.repo";
import { NoteService } from "../../application/note.service";
import { TYPES } from "../../interfaces/types";
import { LoggerDev } from "../logger/logger.dev";
import { LoggerProd } from "../logger/logger.prod";

const container = new Container();

// binding dependency
if (process.env.NODE_ENV === "production") {
  container.bind<LoggerProd>(TYPES.Logger).to(LoggerProd);
} else {
  container.bind<LoggerDev>(TYPES.Logger).to(LoggerDev);
}

container.bind<NoteRepo>(TYPES.NoteRepo).to(NoteRepo);
// binding services
container.bind<NoteService>(NoteService).toSelf();

// instance
export const noteService = container.get<NoteService>(NoteService);
