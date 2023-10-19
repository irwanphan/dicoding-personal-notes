import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { deleteNote, getNote } from "../../utils/local-data";
import Note from '../../components/Note';

const DetailPage = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getNote(id);
            setData(data);
        }
        fetchData();
    }, []);
    useEffect(() => {
        if (data) {
            setIsLoading(false);
        }
    }, [data]);

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <Note
                item={data}
                key={data.id}
                onDeleteNote={() => {
                    deleteNote();
                    location.href = '/';
                }}
                onToggleArchive={() => {
                    location.href = '/';
                }}
            />
        </div>
    )
}

export default DetailPage;