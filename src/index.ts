import { Elysia } from "elysia";
import { noteService } from "./infrastructure/ioc/container";

const app = new Elysia()
  .get("/", async () => {
    const notes = await noteService.getAll();
    return notes;
  })
  .listen(3000);
