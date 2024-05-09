import React from 'react';
import Button from '@mui/material/Button';

interface NotificationButtonProps {
    label: string;
    onClick: () => void;
}

const NotificationButton: React.FC<NotificationButtonProps> = ({ label, onClick }) => {
    return <Button variant="contained" onClick={onClick}>{label}</Button>;
};

export default NotificationButton;