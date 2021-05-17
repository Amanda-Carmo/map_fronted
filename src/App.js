// import Form from "./components/Form";
import AppBar from "./components/AppBar";
import "./App.css";
import Form from "./components/Form";
import FormContainer from "./components/FormContainer"
import Routes from "./Routes"
import axios from 'axios' 

function App() {
  return (
    <div className="App">
      <AppBar />
      <FormContainer>
        <Form/>
      </FormContainer>
    </div>
  );
}

export default App;