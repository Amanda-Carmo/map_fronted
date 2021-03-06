import React from "react";
import "./index.css";
import history from '../../history'; 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import MapPage from '../MapPage';
import{
  BrowserRouter as Router, 
  Switch,
  Route, 
  Link, 
  Redirect,
  } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function Form() {

  const classes = useStyles();

  const [vac_propria, setVacpropria] = React.useState('True');
  const [vac_pais, setVacc] = React.useState('')
  const [disponibilidade_quarentena, setDisp] = React.useState('True');
  const [continente, setCont] = React.useState('');
  const [idade, setIdade] = React.useState('')

  const handleVacPChange = (event) => {
    setVacpropria(event.target.value);
  };

  const handleVacPaisChange =  (event) => {
    setVacc(event.target.value)
  }

  const handleDispChange = (event) => {
    setDisp(event.target.value);
    };

  const handleContChange = (event) => {
    setCont(event.target.value);
  };

  const handleIdadeChange = (event) => {
    setIdade(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let sla = {
      vac_propria: vac_propria,
      vac_pais: vac_pais,
      disponibilidade_quarentena: disponibilidade_quarentena,
      continente: continente, 
      idade: idade,
    }
    axios.post("http://127.0.0.1:8000/api/pais/",sla)
    .then((resp) => {
      setVacpropria('');
      history.push({
        pathname: '/pais' });
      let teste =  JSON.stringify(sla);
      localStorage.setItem('data', teste);
    })
  } 

  return (
    <Router>
      
      <div className="form">              
          <div className="text">
              <h1>Bem vindo ao Covid-map!</h1>
              <p>Preencha o formul??rio conforme seus requisitos para viajar, aperte em "enviar" e depois em "prosseguir" e retornaremos o momento e os pa??ses ideais para realiz??-la.</p>
              <p>Caso n??o tenha requisitos, basta apertar o bot??o "prosseguir".</p>
          </div>
          {/* <span>{" "}</span>
          <span>{" "}</span> */}
          <div  className="text-form">
            <FormControl component="fieldset">
                <FormLabel component="text">Estar?? vacinado at?? o momento da viagem?</FormLabel>
                <RadioGroup aria-label="resp1" name="resp_1" value={vac_propria} onChange={handleVacPChange}>
                  <FormControlLabel value="True" control={<Radio />} label="Sim" />
                  <FormControlLabel value="False" control={<Radio />} label="Nao" />
                </RadioGroup>
            </FormControl>
            <span>{" "}</span>
            <span>{" "}</span>
            <form className={classes.root} noValidate autoComplete="off">
              <FormLabel component="legend">Para viajar, qual percentual de vacina????o do local voc?? considera razo??vel?</FormLabel>
                <TextField
                    onChange = {handleVacPaisChange}
                    value={vac_pais}
                    name="resp_2"
                    id="outlined-number"
                    label="Percentual"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </form>   
            <span>{'  '}</span>
            <span>{'  '}</span>
            <FormControl component="fieldset">
                <FormLabel component="legend">Est?? disposto a fazer quarentena antes de viajar conforme requisitado pelo pa??s?</FormLabel>
                <RadioGroup aria-label="resp3" name="resp_3" value={disponibilidade_quarentena} onChange={handleDispChange}>
                  <FormControlLabel value="True" control={<Radio />} label="Sim" />
                  <FormControlLabel value="False" control={<Radio />} label="Nao" />
                </RadioGroup>
            </FormControl>   
            <span>{'  '}</span>
            <span>{'  '}</span> 
            <FormControl variant="outlined" className={classes.formControl}>
              <FormLabel component="legend">Selecione o continente para o qual deseja ir. Se n??o tiver prefer??ncias, deixe em branco</FormLabel>
              <span>{'  '}</span>
              {/* <InputLabel id="demo-simple-select-outlined-label">Continente</InputLabel> */}
              <Select
                name="resp_4"
                labelId="Continente"
                id="demo-simple-select-outlined"
                onChange={handleContChange}
                value={continente}                
                label="Age"
              >
                <MenuItem value="">
                  <em>Sem prefer??ncias</em>
                </MenuItem>
                <MenuItem value={"[Italy,Brazil]"}>??frica</MenuItem>
                <MenuItem value={"Am??ricas"}>Am??ricas</MenuItem>
                <MenuItem value={"??sia"}>??sia</MenuItem>
                <MenuItem value={"Europa"}>Europa</MenuItem>
                <MenuItem value={"Oceania"}>Oceania</MenuItem>
              </Select>
            </FormControl>
            <span>{'  '}</span>
            <span>{'  '}</span> 
            <form className={classes.root} noValidate autoComplete="off">
              <FormLabel component="legend">Qual a sua idade?</FormLabel>
                  <TextField
                      name = "resp_5"
                      onChange={handleIdadeChange}
                      value = {idade}
                      name="resp_5"
                      id="outlined-number"
                      label="Idade"
                      type="number"
                      InputLabelProps={{
                          shrink: true,
                      }}
                      variant="outlined"
                  />
            </form>       
            <span>{'  '}</span>
            <span>{'  '}</span>   
            <div className="btn-container">
              <button onClick={handleSubmit} type="submit" className="btn">Enviar</button>  
              <span>{'        '}</span>
              <Link to='/pais'onClick={() => { history.push('/pais');}} className="btn2">Prosseguir</Link>
            </div>   
          </div>  
            
      </div>
          
         
    </Router>
    );

}