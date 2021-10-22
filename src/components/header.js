import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/header.scss';

export default function Header() {
    return (
        <div className="header">
            <Link className="header-item" to="/">
                Home
            </Link>
            <Link className="header-item" to="/structure">
                Structure
            </Link>
        </div>
    )
}
