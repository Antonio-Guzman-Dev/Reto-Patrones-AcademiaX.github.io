import React from 'react';
import { useNoteContext } from './NoteContext';

const NoteList = () => {
    const { notes } = useNoteContext();

    return (
        <div className="grid justify-center">
            {notes.map((note, index) => (
                <div className="grid place-items-center min-w-72 w-auto h-32 border-2 shadow-lg bg-gray-100 mt-3 rounded-md"
                key={index}>
                    <h3 className="text-2xl font-bold">{note.title}</h3>
                    <p className="font-semibold">{note.description}</p>
                </div>
            ))}
        </div>
    );
};

export default NoteList;