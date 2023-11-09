import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteNote, getNote, archiveNote, unarchiveNote } from "../../utils/network-data";
import Note from '../../components/Note';
import { useLocale } from '../../contexts/LocaleContext';

const DetailPage = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState();
    const navigate = useNavigate();
    const { isIndonesiaLocale } = useLocale();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getNote(id);
            setItem(response.data);
        }
        fetchData();
    }, []);
    useEffect(() => {
        if (item !== undefined) {
            setIsLoading(false);
        }
    }, [item]);

    if (isLoading) return <div>{isIndonesiaLocale ? 'Sedang memuat ...' : 'Loading...'}</div>

    return (
        <div>
            <Link to={`/`}>{isIndonesiaLocale ? 'Kembali' : 'Go Home'}</Link>

            <div className="divider"></div>            
            <Note
                item={item}
                key={item.id}
                onDeleteNote={() => {
                    isIndonesiaLocale ?
                        confirm('Anda yakin ingin menghapus catatan ini?', deleteNote(item.id)) :
                        confirm('Are you sure you want to delete this note?', deleteNote(item.id)) 
                    navigate('/');
                }}
                onToggleArchive={() => {
                    item.archived && isIndonesiaLocale ?
                        confirm('Anda yakin ingin mengembalikan catatan ini?', unarchiveNote(item.id)) :
                    item.archived && !isIndonesiaLocale ?
                    confirm('Do you want to unarchive this note?', unarchiveNote(item.id)) :
                    isIndonesiaLocale ?
                        confirm('Anda yakin ingin mengarsipkan catatan ini?', archiveNote(item.id)) :
                        confirm('Do you want to archive this note?', archiveNote(item.id))
                    navigate('/');
                }}
            />
        </div>
    )
}

export default DetailPage;