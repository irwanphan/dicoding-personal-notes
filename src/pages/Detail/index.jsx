import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, getNote } from "../../utils/local-data";
import Note from '../../components/Note';

const DetailPage = () => {
    const { id } = useParams();
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
            <Note
                item={item}
                key={item.id}
                onDeleteNote={() => {
                    confirm('Are you sure you want to delete this note?', deleteNote(item.id))
                    navigate('/');
                }}
                onToggleArchive={() => {
                    location.href = '/';
                }}
            />
        </div>
    )
}

export default DetailPage;