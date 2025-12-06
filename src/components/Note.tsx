import type { FC } from "react";
import type { NoteType } from "../type";
import StickyNotes from "./StickyNotes";

type NoteProps = {
    notes: NoteType[];
};
const Note: FC<NoteProps> = ({
    notes
}) => {
    return (
        <div className="p-8 min-h-screen bg-yellow-50">
            <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">Sticky Notes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {notes.map((note) => (
                    <StickyNotes key={note.id} notes={note} />
                ))}
            </div>
        </div>
    );
}

export default Note;