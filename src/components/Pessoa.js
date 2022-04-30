/*function Pessoa(props){
    return(
        <div>
            <img src={props.foto} alt={props.nome}/>
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissao: {props.profissao}</p>
        </div>
    )
}*/
// podemos substituir/diminuir o numero de props em cada linha usando um recurso chamado streisand
// desse jeito:
function Pessoa({nome,idade,profissao,foto}){
    return(
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}
//desse jeito o nome da propriedade ja se torna uma prop e não precisareos ficar chamando o props em cada variavel


export default Pessoa