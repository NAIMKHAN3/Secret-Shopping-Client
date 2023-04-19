import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/router';
import { Provider } from 'react-redux';
import store from './app/store';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Toaster />
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
