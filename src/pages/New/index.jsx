import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

import Header from '../../components/Header'
import Title from '../../components/Title'

import { db } from '../../services/firebaseConnection'
import { collection, getDocs, getDoc, doc, addDoc } from 'firebase/firestore'

import { useParams } from 'react-router-dom'

import { FiPlusCircle } from 'react-icons/fi'
import { toast } from 'react-toastify'
import './new.css'

function New() {
    const { user } = useContext(AuthContext);
    const { id } = useParams();

    const [customers, setCustomers] = useState([]);
    const [loadCustomer, setLoadCustumer] = useState(true);
    const [customerSelected, setCustomerSelected] = useState(0);

    const [complemento, setComplemento] = useState('');
    const [assunto, setAssunto] = useState("Suporte");
    const [status, setStatus] = useState("Aberto");
    
    const [idCustomer, setIdCustomer] = useState(false)

    useEffect(() => {
        async function loadCustomers() {
            const listRef = collection(db, "customers");

            const querySnapshot = await getDocs(listRef)
                .then((snapshot) => {
                    let lista = [];
                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            nomeFantasia: doc.data().nomeFantasia,
                        })
                    })

                    if (snapshot.docs.size === 0) {
                        console.log("Nenhum cliente foi encontrado");
                        setCustomers([{ id: "1", nomeFantasia: 'FREELA' }]);
                        setLoadCustumer(false);
                        return;
                    }

                    setCustomers(lista);
                    setLoadCustumer(false);

                    if (id) {
                        loadId(lista);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setLoadCustumer(false);
                    setCustomers([{ id: "1", nomeFantasia: 'FREELA' }]);
                })
        }
        loadCustomers()
    }, [id])

    async function loadId(lista) {
        const docRef = doc(db, "chamados", id);

        await getDoc(docRef)
            .then((snapshot) => {
                setAssunto(snapshot.data().assunto);
                setStatus(snapshot.data().status);
                setComplemento(snapshot.data().complemento);

                let index = lista.findIndex(item => item.id === snapshot.data().clienteId);
                setCustomerSelected(index);
                setIdCustomer(true);

            }).catch((error) => {
                console.log(error);
                setIdCustomer(false);
            })
    }

    function handleOptionsChange(e) {
        setStatus(e.target.value);
        console.log(e.target.value);
    }

    function handleChangeSelect(e) {
        setAssunto(e.target.value);
        console.log(e.target.value);
    }

    function handleChangeCustomer(e) {
        setCustomerSelected(e.target.value);
        console.log(customers[e.target.value].nomeFantasia);
    }

    async function handleRegister(e) {
        e.preventDefault();

        if (idCustomer) {
            alert("Editando chamado");
            return;
        }

        //registrar chamado
        await addDoc(collection(db, "chamados"), {
            created: new Date(),
            cliente: customers[customerSelected].nomeFantasia,
            clienteId: customers[customerSelected].id,
            assunto: assunto,
            complemento: complemento,
            status: status,
            userId: user.uid,
        })
            .then(() => {
                toast.success("Chamado registrado com sucesso!")
                setComplemento("")
                setCustomerSelected(0)
            })
            .catch((error) => {
                console.log(error)
                toast.error("Não foi possível registrar o chamado, tente novamente!")
            })
    }

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Novo chamado">
                    <FiPlusCircle size={25} />
                </Title>

                <div className='container'>
                    <form className='form-profile' onSubmit={handleRegister}>
                        <label>Clientes</label>
                        {
                            loadCustomer ? (
                                <input type="text" disabled={true} value="Carregando clientes..." />
                            ) : (
                                <select value={customerSelected} onChange={handleChangeCustomer}>
                                    {
                                        customers.map((item, index) => {
                                            return (
                                                <option value={index} key={index}>
                                                    {item.nomeFantasia}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            )
                        }

                        <label>Assunto</label>
                        <select value={assunto} onChange={handleChangeSelect}>
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

export default New;