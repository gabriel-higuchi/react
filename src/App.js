import Login from './pages/Login';
import Registro from './pages/Registro';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}/>
          <Route path='/register' element={<Registro></Registro>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
