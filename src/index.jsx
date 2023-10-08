import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';

import { getInitialData } from './utils';
import Note from './components/Note';
import FormCreateNote from './components/FormCreateNote';

const Home = () => {
    const [data, setData] = useState([]);
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
    const filteredNotes = data.filter(
        (note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.body.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                    filteredNotes.length == 0 ? <div>Tidak ada catatan</div> : 
                    filteredNotes.map((item) => {
                        return (
                            <Note 
                                item={item}
                                key={item.id} 
                                onDeleteNote={deleteNote}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<Home />);