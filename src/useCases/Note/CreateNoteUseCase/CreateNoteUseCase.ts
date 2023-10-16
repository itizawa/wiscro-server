import { Note, NoteModel } from "~/models/Note";
import { User } from "~/models/User";

export class CreateNoteUseCase {
  async execute({
    currentUser,
    title,
    description,
  }: Pick<Note, "title" | "description"> & {
    currentUser: User;
  }): Promise<Note> {
    return await NoteModel.create({
      title,
      description,
      createdUserId: currentUser._id,
    });
  }
}
