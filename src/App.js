import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// view component imports
import HomeView from "./views/HomeView";
import NavBar from './components/NavBar';
import LoginView from './views/LoginView';
import AddPropertyView from './views/AddProperyView';
import PropertyDetailsView from './views/PropertyDetailsView';
import UpdatePropertyView from './views/UpdatePropertyView';
import SignupView from './views/SignupView';

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/login" element= {<LoginView/>} />
            <Route path="/" element={<HomeView/>} />
            <Route path="/property/:id" element={<PropertyDetailsView/>}/>
            <Route path="/addProperty" element={<AddPropertyView/>}/>
            <Route path="/signup" element={<SignupView/>}/>
            <Route path="/update/:id" element={<UpdatePropertyView/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;


