import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';

import { getInitialData, showFormattedDate } from './utils';
import Note from './components/Note';
import FormCreateNote from './components/FormCreateNote';

const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        console.log(data);
    }, [data]);

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="container">
            <FormCreateNote />

            <div className="notes-container">
                {
                    data &&
                    data.map((item, index) => {
                        return (
                            <Note item={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<Home />);