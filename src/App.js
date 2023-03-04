import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainInner from './Components/MainInner';
import AddEmployee from './Components/AddEmployee';
import Update from './Components/Update';

function App() {
  return (
<div>
  <Header></Header>
  <BrowserRouter>
    <Routes>
      <Route path='/manage' element={<MainInner></MainInner>}></Route>
      <Route path='/addNew' element={<AddEmployee></AddEmployee>}></Route>
      <Route path='/update' element={<Update></Update>}></Route>
    </Routes>
  </BrowserRouter>
  <Footer></Footer>
</div>
  );
}

export default App;
