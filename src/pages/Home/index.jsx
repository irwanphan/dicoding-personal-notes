import React, { useState, useEffect } from 'react';
import FormCreateNote from '../../components/FormCreateNote';
import SearchInput from '../../components/SearchInput';
import { getAllNotes, getNote, deleteNote, unarchiveNote, archiveNote } from '../../utils/local-data';
import Note from '../../components/Note';
import propTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import Auth from '../../utils/auth';
import { getAccessToken } from '../../utils/network-data';

const HomePageWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParam = searchParams.get('queryParam');
    function changeSearchParams(queryParam) {
        setSearchParams({ queryParam });
    }

    return <HomePage searchQueryChange={changeSearchParams} />
}

const HomePage = ({searchQueryChange}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllNotes();
            setData(data);
        }
        fetchData();
    }, []);
    useEffect(() => {
        searchQueryChange(searchQuery);
        if (data) {
            setIsLoading(false);
        }
    }, [searchQuery]);

    // const createNote = (newNote) => {
    //     const newData = [...data, newNote];
    //     setData(newData);
    // };
    const handleDeleteNote = async (noteId) => {
        deleteNote(noteId);
        const data = await getAllNotes();
        setData(data);
    };
    const toggleArchiveNote = async (noteId) => {
        // const updatedData = data.map((note) => {
        //     if (note.id === noteId) {
        //         return { ...note, archived: !note.archived };
        //     }
        //     return note;
        // });
        // setData(updatedData);
        const itemMarked = await getNote(noteId)
        itemMarked.archived ? unarchiveNote(noteId) : archiveNote(noteId)

        const updatedData = await getAllNotes();
        setData(updatedData);
    };

    const onSearchQueryChangeHandler = (query) => {
        setSearchQuery(query);
    }

    const filteredNotes = data.filter(
        (note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.body.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const archivedNotes = filteredNotes.filter((note) => note.archived);
    const nonArchivedNotes = filteredNotes.filter((note) => !note.archived);

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <FormCreateNote onCreateNote={setData} />

            <div className="divider"></div>
            <SearchInput value={searchQuery} onChange={onSearchQueryChangeHandler} />

            <div className="notes-container">
                {
                    nonArchivedNotes.length == 0 ? <div>Tidak ada catatan</div> : 
                    nonArchivedNotes.map((item) => {
                        return (
                            <Note 
                                item={item}
                                key={item.id} 
                                onDeleteNote={handleDeleteNote}
                                onToggleArchive={toggleArchiveNote}
                            />
                        )
                    })
                }
            </div>

            <div className="divider"></div>
            <h3>Archived Notes</h3>
            <div className="archived-notes-container">
                {
                    archivedNotes.length == 0 ? <div>Tidak ada arsip</div> : 
                    archivedNotes.map((item) => {
                    return (
                        <Note
                            item={item}
                            key={item.id}
                            onDeleteNote={handleDeleteNote}
                            onToggleArchive={toggleArchiveNote}
                        />
                    );
                })}
            </div>
        </div>
    )
}

HomePage.propTypes = {
    searchQueryChange: propTypes.func,
}

export default HomePageWrapper;