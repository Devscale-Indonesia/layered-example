import { INote, Note } from "../../interfaces/entities";

export class NoteRepo implements INote {
  async getAll(): Promise<Note[]> {
    // logic how you get data from DB
    // prisma.note.findMany()
    // mongoose.find()
    // SQL Raw `SELECT * FROM user`
    return [];
  }

  async getOneById(): Promise<Note> {
    return {
      id: "test123",
      content: "test",
      isDone: false,
    };
  }
}
