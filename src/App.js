
import './App.css';
import HelloWorld from './components/HelloWorld' 
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';



function App() {
  //const nome = "Laysa"
  const meusItens =['react','Vue', 'Angular']


  return (
  <div className="App">
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
       
  <Form/>*/}
  {/*
  <h1>Renderizanção Condicional</h1>
  <Condicional/>

    
*/}


  <h1> Renderização de Listas</h1>
  <OutraLista itens={meusItens}/>
  <OutraLista itens={[]}/>
  </div>
  )
}

export default App;
