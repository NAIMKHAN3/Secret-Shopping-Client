import { Link, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ children }) => {
    const { user: { email, role }, isLoading } = useSelector((state) => state.auth);
    console.log(email)
    console.log(isLoading)
    const location = useLocation();

    if (isLoading) {
        return <h1>loading.....</h1>
    }

    if (email && role === 'admin') {
        return children;
    }

    if (email && !role) {
        return <div className='flex justify-center items-center text-red-500 h-[650px] w-full'>
            <h1 className='text-2xl font-semibold'>Only Admin access this route please back to <Link className='text-indigo-600' to='/'>home</Link></h1>
        </div>
    }


    return <Navigate to='/login' state={{ from: location }} replace></Navigate>



};

export default AdminRoute;