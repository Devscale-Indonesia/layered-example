import { NoteRepo } from "../infrastructure/database/note.repo";
import { LoggerDev } from "../infrastructure/logger/logger.dev";

export class NoteService {
  private noteRepo: NoteRepo;
  private logger: LoggerDev;

  constructor(noteRepo: NoteRepo, logger: LoggerDev) {
    this.noteRepo = noteRepo;
    this.logger = logger;
  }

  getAll() {
    // Business Logic
    this.logger.info("user ambil getAll");
    return this.noteRepo.getAll();
  }

  getOneById(id: string) {
    // Business Logic
    return this.noteRepo.getAll();
  }
}
