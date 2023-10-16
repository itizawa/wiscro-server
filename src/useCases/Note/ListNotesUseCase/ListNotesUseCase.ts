import { Note, NoteModel } from "~/models/Note";

export class ListNotesUseCase {
  async execute(): Promise<Note[]> {
    return await NoteModel.find().limit(10).sort("-createdAt");
  }
}
