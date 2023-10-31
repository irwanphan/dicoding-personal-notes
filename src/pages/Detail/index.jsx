import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteNote, getNote, archiveNote, unarchiveNote } from "../../utils/local-data";
import Note from '../../components/Note';

const DetailPage = () => {
    const { id } = useParams();
    // TODO : if id not found, redirect to 404 page
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getNote(id);
            setItem(data);
        }
        fetchData();
    }, []);
    useEffect(() => {
        if (item) {
            setIsLoading(false);
        }
    }, [item]);

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <Link to={`/`}>Go Home</Link>

            <div className="divider"></div>            
            <Note
                item={item}
                key={item.id}
                onDeleteNote={() => {
                    confirm('Are you sure you want to delete this note?', deleteNote(item.id))
                    navigate('/');
                }}
                onToggleArchive={() => {
                    item.archived
                    ?   confirm('Do you want to unarchive this note?', unarchiveNote(item.id))
                    :   confirm('Do you want to archive this note?', archiveNote(item.id))
                    navigate('/');
                }}
            />
        </div>
    )
}

export default DetailPage;