import React from 'react';
import './Footer.css';
import HeartIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return (
        <footer>
            Made with <HeartIcon sx={{ color: 'red', fontSize: '20px' }} /> by Himanshu
        </footer>
    )
}

export default Footer