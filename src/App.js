// import Form from "./components/Form";
import AppBar from "./components/AppBar";
import "./App.css";
import Form from "./components/Form";
import FormContainer from "./components/FormContainer"
import axios from 'axios' 
import MapPage from "./components/MapPage"
import Routes from './routes.jsx';

function App() {
  return (
    <div className="App">
      <AppBar /> 
      <FormContainer>
        <Routes />
      </FormContainer> 
      {/* <MapPage /> */}
    </div>
  );
}

export default App;