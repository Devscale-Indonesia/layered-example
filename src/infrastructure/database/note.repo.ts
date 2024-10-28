import { INote, Note } from "../../interfaces/entities";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class NoteRepo implements INote {
  async getAll(): Promise<Note[]> {
    return [
      {
        id: "test123",
        content: "test",
        isDone: false,
      },
    ];
  }

  async getOneById(): Promise<Note> {
    return {
      id: "test123",
      content: "test",
      isDone: false,
    };
  }
}
