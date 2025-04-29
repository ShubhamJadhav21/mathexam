import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Userinput from './components/UserInput/Userinput';
import SpeedBoost from './components/SpeedBoost/SpeedBoost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userinput />} />
        <Route path="/exam" element={<SpeedBoost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
