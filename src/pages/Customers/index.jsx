import { useState } from "react"
import Header from "../../components/Header"
import Title from "../../components/Title"

import { FiUser } from "react-icons/fi"

import "./customers.css"

function Customers() {
   const [nome, setNome] = useState("")
   const [cnpj, setCnpj] = useState("")
   const [endereco, setEndereco] = useState("")

   function handleRegister(e) {
      e.preventDefault()
      console.log(nome, cnpj, endereco)
   }

   return (
      <div>
         <Header />

         <div className="content">
            <Title name="Clientes">
               <FiUser size={25} />
            </Title>

            <div className="container">
               <form className="form-profile" onSubmit={handleRegister}>
                  <label>Nome fantasia:</label>
                  <input
                     type="text"
                     placeholder="Nome da empresa"
                     value={nome}
                     onChange={(e) => setNome(e.target.value)}
                  />
                  <label>CNPJ:</label>
                  <input
                     type="text"
                     placeholder="Digite o CNPJ"
                     value={cnpj}
                     onChange={(e) => setCnpj(e.target.value)}
                  />
                  <label>Endereço:</label>
                  <input
                     type="text"
                     placeholder="Digite o endereço da empresa"
                     value={endereco}
                     onChange={(e) => setEndereco(e.target.value)}
                  />
                  <button type="submit">Cadastrar</button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Customers
