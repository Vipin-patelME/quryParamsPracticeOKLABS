
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='page4/:id' element={<Page4 />} />
        <Route path='page5/:id' element={<Page5 />} />
        <Route path="/" element={<Home />}></Route>
          <Route path='page1' element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
