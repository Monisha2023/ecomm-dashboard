
import './App.css';

import Header from './Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <h1>E-Comm Project</h1>
      <Routes>
      <Route path="/login" element={<Login />}>Login</Route>
      <Route path="/register" element={<Register />}>Register</Route>
      <Route path="/add" element={<AddProduct />}>Add</Route>
      <Route path="/update" element={<UpdateProduct />}>Update</Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
