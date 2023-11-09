import React from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../../contexts/LocaleContext";

const NotFoundPage = () => {
    const { isIndonesiaLocale } = useLocale();

    return (
        <div>
            <Link to={`/`}>{isIndonesiaLocale ? 'Kembali' : 'Go Home'}</Link>
            <div className="divider"></div>
            <h1 className="not-found">404</h1>
            <h3 className="not-found">{isIndonesiaLocale ? "Anda tersesat, halaman tidak ditemukan" : "Page not found, you're lost"}</h3>
        </div>
    )
}

export default NotFoundPage;