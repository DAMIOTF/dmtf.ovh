import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CVPage from './pages/CVPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cv" element={<CVPage />} />
        <Route path="/" element={<CVPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}
