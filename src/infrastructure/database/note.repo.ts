import { INote } from "../../interfaces/entities";
import { Note } from "@prisma/client";
import { prisma } from "../../utils/prisma";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class NoteRepo implements INote {
  async getAll(): Promise<Note[]> {
    return await prisma.note.findMany();
  }

  async getOneById(id: number): Promise<Note | null> {
    return await prisma.note.findFirst({
      where: {
        id,
      },
    });
  }
}
