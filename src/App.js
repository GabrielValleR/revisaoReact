
import './App.css';
    /*import HelloWorld from './components/HelloWorld' 
    import SayMyName from './components/SayMyName';
    import Pessoa from './components/Pessoa'
    import Frase from './components/Frase'
    import List from './components/List'
    import Evento from './components/Evento';
    import Form from './components/Form';
    import Condicional from './components/Condicional';
    import OutraLista from './components/OutraLista';
    import {useState} from 'react'
    import SeuNome from './components/SeuNome';
    import Saudacao from './components/Saudacao';*/
  //Começando com o Router
  import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';


function App() {
  //const nome = "Laysa"
  //const meusItens =['react','Vue', 'Angular']
  //const [nome, setNome] = useState()


  return (
  /*<div className="App">
          {/*<h1>boraaaa</h1>
          <Frase/>  
          <HelloWorld/>
          <SayMyName name="Gabriel"/>
          <SayMyName name={nome}/>
          <Pessoa 
            nome={nome} 
            idade="28" 
            profissao="Esposa de marido rico" 
            foto="https://www.instagram.com/p/CclF1XHO9DJcWTCxk2v6Z1pxpRUvs9CP8-zIqw0/"       
            />
            <List/>
            <Evento numero='1'/>
            
        <Form/> }
        {/*
        <h1>Renderizanção Condicional</h1>
        <Condicional/>

          
      }


      {/* <h1> Renderização de Listas</h1>
        <OutraLista itens={meusItens}/>
        <OutraLista itens={[]}/> }

        {/*<h1> State Lift</h1>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome}/>}
  </div> */

  <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>        
      <Route path="/empresa" element={<Empresa/>}/>
      <Route path="/contato" element={<Contato/>}/>
    </Routes>
    <Footer/>
</Router>
  )
}

export default App;
