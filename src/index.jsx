import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';

import { getInitialData } from './utils';
import Note from './components/Note';
import FormCreateNote from './components/FormCreateNote';

const Home = () => {
    const [data, setData] = useState([]);
    const [archivedData, setArchivedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getInitialData();
            setData(data);
        }
        fetchData();
    }, []);
    useEffect(() => {
        if (data) {
            setIsLoading(false);
        }
        // console.log(data);
    }, [data]);

    const createNote = (newNote) => {
        const newData = [...data, newNote];
        setData(newData);
    };
    const deleteNote = (noteId) => {
        const updatedData = data.filter((note) => note.id !== noteId);
        setData(updatedData);
    };
    const toggleArchiveNote = (noteId) => {
        const updatedData = data.map((note) => {
            if (note.id === noteId) {
                return { ...note, archived: !note.archived };
            }
            return note;
        });
        setData(updatedData);
    };

    const filteredNotes = data.filter(
        (note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.body.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const archivedNotes = filteredNotes.filter((note) => note.archived);
    const nonArchivedNotes = filteredNotes.filter((note) => !note.archived);

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="container">
            <FormCreateNote onCreateNote={createNote} />

            <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <br/>

            <div className="notes-container">
                {
                    nonArchivedNotes.length == 0 ? <div>Tidak ada catatan</div> : 
                    nonArchivedNotes.map((item) => {
                        return (
                            <Note 
                                item={item}
                                key={item.id} 
                                onDeleteNote={deleteNote}
                                onToggleArchive={toggleArchiveNote}
                            />
                        )
                    })
                }
            </div>

            <div className="archived-notes-container">
                <h2>Archived Notes</h2>
                {
                    archivedNotes.map((item) => {
                    return (
                        <Note
                            item={item}
                            key={item.id}
                            onDeleteNote={deleteNote}
                            onToggleArchive={toggleArchiveNote}
                        />
                    );
                })}
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<Home />);