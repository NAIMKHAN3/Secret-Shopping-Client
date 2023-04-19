import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';
import { Provider } from 'react-redux';
import store from './app/store';
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './Pages/Firebase/firebase.config';
import { useDispatch } from 'react-redux'
import { setUser } from './app/features/auth/authSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email))
      }
    })
  })
  return (
    <div>
      <Toaster />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
