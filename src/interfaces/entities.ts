import { Note } from "@prisma/client";

export interface INote {
  getAll: () => Promise<Note[]>;
  getOneById: (id: number) => Promise<Note | null>;
  //   create: (data: Omit<Note, "id">) => Promise<Note>;
  //   update: (id: string, data: Partial<Note>) => Promise<Note>;
  //   delete: (id: string) => void;
}
