import React, { useState } from 'react';
import { useNoteContext } from './NoteContext';

const NoteForm = () => {

    const {addNote} = useNoteContext();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(title, description);
        setTitle('');
        setDescription('');
    };
    
    return (
        <form className="grid justify-center place-items-center" onSubmit={handleSubmit}>
            <label className="grid pb-2.5 pt-4 text-xl font-semibold">
                Título:
                <input 
                    className="pl-1 border-2 border-slate-500 shadow-md w-60 h-11 text-lg"
                    type="text"
                    placeholder="Escribe un título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label className="grid pb-3.5 pt-2 text-xl font-semibold">
                Descripción:
                <input 
                    className="pl-1 border-2 border-slate-500 shadow-md w-60 h-11 text-lg"
                    type="text"
                    placeholder="Escribe un titulo"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <button
            className="shadow-md text-lg font-semibold border-2 border-teal-500 bg-lime-600 text-white w-40 h-11 hover:-translate-y-1 hover:bg-green-500"
            type="submit">Agregar Tarjeta</button>
        </form>
    );

};

export default NoteForm;