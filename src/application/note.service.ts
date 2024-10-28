import { NoteRepo } from "../infrastructure/database/note.repo";
import { injectable, inject } from "inversify";
import { TYPES } from "../interfaces/types";
import "reflect-metadata";
import { LoggerDev } from "../infrastructure/logger/logger.dev";

@injectable()
export class NoteService {
  private noteRepo: NoteRepo;
  private logger: LoggerDev;

  constructor(@inject(TYPES.NoteRepo) noteRepo: NoteRepo, @inject(TYPES.Logger) logger: LoggerDev) {
    this.noteRepo = noteRepo;
    this.logger = logger;
  }

  getAll() {
    this.logger.info("User ambil get All");
    return this.noteRepo.getAll();
  }

  getOneById(id: string) {
    // Business Logic
    return this.noteRepo.getAll();
  }
}
