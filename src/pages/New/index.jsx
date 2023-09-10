import { useState } from 'react'

import Header from '../../components/Header'
import Title from '../../components/Title'

import {FiPlusCircle} from 'react-icons/fi'

import './new.css'

function New() {
    const [customers, setCustomers] = useState([])

    const [complemento, setComplemento] = useState('')
    const [assunto, setAssunto] = useState("Suporte")
    const [status, setStatus] = useState("Aberto")

    function handleOptionsChange(e) {
        setStatus(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div>
            <Header />
            
            <div className="content">
                <Title name="Novo chamado">
                    <FiPlusCircle  size={25} />
                </Title>

                <div className='container'>
                    <form className='form-profile'>
                        <label>Clientes</label>
                        <select>
                            <option key={1} value={1}>Mercado teste</option>
                            <option key={2} value={2}>Loja informática</option>
                        </select>

                        <label>Assunto</label>
                        <select>
                            <option value="Suporte">Suporte</option>
                            <option value="Visita Tecnica">Visita Tecnica</option>
                            <option value="Financeiro">Financeiro</option>
                        </select>

                        <label>Status</label>

                        <div className='status'>
                            <input 
                                type="radio" 
                                name='radio' 
                                value="Aberto"
                                onChange={handleOptionsChange}
                                checked={status === "Aberto"}
                            />
                            <span>Em aberto</span>

                            <input 
                                type="radio" 
                                name='radio' 
                                value="Progresso"
                                onChange={handleOptionsChange}
                                checked={status === "Progresso"}
                            />
                            <span>Progresso</span>

                            <input 
                                type="radio" 
                                name='radio' 
                                value="Atendido"
                                checked={status === "Atendido"}
                                onChange={handleOptionsChange}
                            />
                            <span>Atendido</span>
                        </div>

                        <label>Complemento</label>
                        
                        <textarea
                            type="text" 
                            placeholder='Descreva seu problema (opcional)'
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                        />

                        <button type='submit'>Registrar</button>
                    </form>
                </div>

            </div>

        </div>
    );
}

export default New ;