import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layouts/Main';
import Grandpa from './components/Grandpa/Grandpa';

function App() {
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <Main></Main>,
      children: [
       {
         path: '/',
         loader: () => fetch('tshirts.json'),
        element: <Home></Home>
       },
       {
        path: '/orders',
        element: <Orders></Orders>
       },
       {
        path: '/grandpa',
        element: <Grandpa></Grandpa>
       }
      ]
    }

  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
