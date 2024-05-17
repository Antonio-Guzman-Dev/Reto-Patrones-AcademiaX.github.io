import React, { createContext, useContext, useState } from 'react';

const NoteContext = createContext();
export const useNoteContext = () => useContext(NoteContext);
export const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    const addNote = (title, description) => {
        setNotes([...notes, { title, description }]);
    };

    return(
        <NoteContext.Provider value={{ notes, addNote }}>
            {children}
        </NoteContext.Provider>
    );

};
