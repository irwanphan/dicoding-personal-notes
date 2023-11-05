import React, { useState, useEffect } from 'react';
import FormCreateNote from '../../components/FormCreateNote';
import SearchInput from '../../components/SearchInput';
import Note from '../../components/Note';
import propTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { getActiveNotes, getArchivedNotes, deleteNote, archiveNote, unarchiveNote, getNote, getUserLogged, getAccessToken } from '../../utils/network-data';

const HomePageWrapper = ({user}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryParam = searchParams.get('queryParam');
    function changeSearchParams(queryParam) {
        setSearchParams({ queryParam });
    }

    return <HomePage searchQueryChange={changeSearchParams} user={user} />
}

const HomePage = ({searchQueryChange, user}) => {
    const [activeData, setActiveData] = useState([]);
    const [archivedData, setArchivedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [isChecking, setIsChecking] = useState(true);
    const ownId = user.id;

    const retrieveActiveNotes = async () => {
        const response = await getActiveNotes();
        setActiveData(response.data);
        console.log(response.data);
    }
    const retrieveArchivedNotes = async () => {
        const response = await getArchivedNotes();
        setArchivedData(response.data);
    }
    useEffect(() => {
        retrieveActiveNotes();
        retrieveArchivedNotes();
        setIsChecking(false);
    }, [isChecking]);
    useEffect(() => {
        searchQueryChange(searchQuery);
        setIsLoading(false);
    }, [searchQuery]);

    const handleDeleteNote = async (noteId) => {
        deleteNote(noteId);
        setIsChecking(true);
    };

    const toggleArchiveNote = async (noteId) => {
        const itemMarked = await getNote(noteId)
        itemMarked.data.archived ? unarchiveNote(noteId) : archiveNote(noteId)
        setIsChecking(true);
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
                        if (item.owner === ownId) {
                            return (
                                <Note 
                                    item={item}
                                    key={item.id} 
                                    onDeleteNote={handleDeleteNote}
                                    onToggleArchive={toggleArchiveNote}
                                />
                            )
                        }
                    })
                }
            </div>

            <div className="divider"></div>
            <h3>Archived Notes</h3>
            <div className="archived-notes-container">
                {
                    archivedData.length == 0 ? <div>Tidak ada arsip</div> : 
                    archivedData.map((item) => {
                        if (item.owner === ownId) {
                            return (
                                <Note
                                    item={item}
                                    key={item.id}
                                    onDeleteNote={handleDeleteNote}
                                    onToggleArchive={toggleArchiveNote}
                                />
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

HomePage.propTypes = {
    searchQueryChange: propTypes.func,
}

export default HomePageWrapper;