import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const { user: { email }, isLoading } = useSelector((state) => state.auth);
    console.log(email)
    console.log(isLoading)
    const location = useLocation();

    if (isLoading) {
        return <h1>loading.....</h1>
    }

    if (email) {
        return children;
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>



};

export default PrivateRoute;