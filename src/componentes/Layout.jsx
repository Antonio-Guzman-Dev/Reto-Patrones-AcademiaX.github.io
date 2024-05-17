import React from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { NoteProvider } from './NoteContext';

const Layout = () => {
    return (
        <>
            <NoteProvider>
                <div>
                    <h1 className="text-4xl font-bold mt-4">Notas</h1>
                    <NoteForm />
                    <NoteList />
                </div>
            </NoteProvider>
        </>
    );
};

export default Layout;