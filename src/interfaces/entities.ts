export interface Note {
  id: string;
  content: string;
  isDone: boolean;
}

export interface INote {
  getAll: () => Promise<Note[]>;
  getOneById: (id: string) => Promise<Note>;
  //   create: (data: Omit<Note, "id">) => Promise<Note>;
  //   update: (id: string, data: Partial<Note>) => Promise<Note>;
  //   delete: (id: string) => void;
}
