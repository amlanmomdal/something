import type { FC } from "react";
import type { NoteType } from "../type";
type stickyNoteProps = {
    notes: NoteType;
};
const StickyNotes: FC<stickyNoteProps> = ({
    notes
}) => {
    return <div
        key={notes.id}
        className={`bg-white rounded-lg shadow-md p-4 ${notes.isStar ? 'border-4 border-yellow-400' : ''}`}
    >
        <p className="text-gray-700">{notes.content}</p>
    </div>
};

export default StickyNotes;