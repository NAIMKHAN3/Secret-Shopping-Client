import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const { user: { email }, isLoading } = useSelector((state) => state.auth);

    console.log(isLoading)
    const location = useLocation();

    if (isLoading) {
        return <h1 className='text-2xl text-center'>Loading.....</h1>
    }

    if (email) {
        return children;
    }
    console.log(email)

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>



};

export default PrivateRoute;