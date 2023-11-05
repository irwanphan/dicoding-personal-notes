import React, { useState, useEffect } from 'react';
import FormCreateNote from '../../components/FormCreateNote';
import SearchInput from '../../components/SearchInput';
import { getAllNotes, getNote, deleteNote, unarchiveNote, archiveNote } from '../../utils/local-data';
import Note from '../../components/Note';
import propTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes, getArchivedNotes } from '../../utils/network-data';

const HomePageWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParam = searchParams.get('queryParam');
    function changeSearchParams(queryParam) {
        setSearchParams({ queryParam });
    }

    return <HomePage searchQueryChange={changeSearchParams} />
}

const HomePage = ({searchQueryChange}) => {
    const [activeData, setActiveData] = useState([]);
    const [archivedData, setArchivedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const retrieveActiveNotes = async () => {
        const response = await getActiveNotes();
        setActiveData(response.data);
    }
    const retrieveArchivedNotes = async () => {
        const response = await getArchivedNotes();
        setArchivedData(response.data);
    }
    useEffect(() => {
        retrieveActiveNotes();
        retrieveArchivedNotes();
    }, []);
    useEffect(() => {
        searchQueryChange(searchQuery);
        setIsLoading(false);
    }, [searchQuery]);

    const toggleArchiveNote = async (noteId) => {
        const itemMarked = await getNote(noteId)
        itemMarked.archived ? unarchiveNote(noteId) : archiveNote(noteId)

        const updatedData = await getAllNotes();
        setData(updatedData);
    };

    const onSearchQueryChangeHandler = (query) => {
        setSearchQuery(query);
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <FormCreateNote onCreateNote={setActiveData} />

            <div className="divider"></div>
            <SearchInput value={searchQuery} onChange={onSearchQueryChangeHandler} />

            <div className="notes-container">
                {
                    activeData.length == 0 ? <div>Tidak ada catatan</div> : 
                    activeData.map((item) => {
                        return (
                            <Note 
                                item={item}
                                key={item.id} 
                                // onDeleteNote={handleDeleteNote}
                                // onToggleArchive={toggleArchiveNote}
                            />
                        )
                    })
                }
            </div>

            <div className="divider"></div>
            <h3>Archived Notes</h3>
            <div className="archived-notes-container">
                {
                    archivedData.length == 0 ? <div>Tidak ada arsip</div> : 
                    archivedData.map((item) => {
                    return (
                        <Note
                            item={item}
                            key={item.id}
                            // onDeleteNote={handleDeleteNote}
                            // onToggleArchive={toggleArchiveNote}
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