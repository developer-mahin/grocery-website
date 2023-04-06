import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/router';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500
    })
  }, [])

  return (
    <div className="App">
        <RouterProvider router={router}>
        </RouterProvider>
    </div>
  );
}

export default App;
