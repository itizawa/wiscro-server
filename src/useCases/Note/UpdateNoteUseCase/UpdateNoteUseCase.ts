import { Note, NoteModel } from "~/models/Note";
import { User } from "~/models/User";

export class UpdateNoteUseCase {
  async execute({
    id,
    title,
    description,
    currentUser,
  }: {
    id: string;
    title: string;
    description: string;
    currentUser: User;
  }): Promise<Note> {
    return await NoteModel.findOneAndUpdate(
      { _id: id, user: currentUser._id },
      { title, description },
    );
  }
}
