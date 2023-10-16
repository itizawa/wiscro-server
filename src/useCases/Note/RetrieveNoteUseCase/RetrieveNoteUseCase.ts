import { Note, NoteModel } from "~/models/Note";

export class RetrieveNoteUseCase {
  async execute({ id }: { id: string }): Promise<Note> {
    return await NoteModel.findById(id);
  }
}
