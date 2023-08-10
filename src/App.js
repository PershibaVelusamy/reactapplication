import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from './components/Main';
import { Calculator } from './components/pages/calculator';
function App() {
  return (
    <div >
   <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Main />}> */}
        <Route path="/" element={<Calculator />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
