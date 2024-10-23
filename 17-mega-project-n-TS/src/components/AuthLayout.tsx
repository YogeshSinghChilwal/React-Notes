import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store'; 

interface ProtectedProps {
    children: React.ReactNode;
    authentication?: boolean;
}

const Protected: React.FC<ProtectedProps> = ({ children, authentication = true }) => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);

    // Define the correct type for the `authStatus`
    const authStatus = useSelector((state: RootState) => state.auth.status);

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/");
        }
        setLoader(false);
    }, [authStatus, navigate, authentication]);

    return loader ? <h1>Loading...</h1> : <>{children}</>;
};

export default Protected;
