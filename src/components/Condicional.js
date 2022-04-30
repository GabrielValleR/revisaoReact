import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState() 

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log('Testendo envio de email')
    }
   function limparEmail(){
       setUserEmail('')
   }
    return(
        <div>
            <h2>Informe seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..." onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>Enviar e-mail</button>
            </form>
            {userEmail && (
                <div>
                    <p>O e-mail do usuario é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            )}

        </div>
    )
}

export default Condicional