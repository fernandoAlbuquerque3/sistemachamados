import React from 'react'

import { FiX } from 'react-icons/fi'
import './modal.css'

function Modal({ modalContent, closeModal }) {
    return (
        <div className='modal'>
            <div className="container">
                <button className='close' onClick={closeModal}>
                    <FiX size={25} color='#fff' />
                    Voltar
                </button>

                <main>
                    <h2>Detalhes do chamado</h2>

                    <div className='row'>
                        <span>Cliente: <i>{modalContent.cliente}</i> </span>
                    </div>

                    <div className="row">
                        <span>Assunto: <i>{modalContent.assunto}</i></span>
                        <span>Cadastrado em: <i>{modalContent.createdFormat}</i></span>
                    </div>

                    <div className="row">
                        <span>Status:
                            <i className='status-badge' style={{ color: "#FFF", backgroundColor: modalContent.status === 'Aberto' ? "#5cb85c" : "#999" }}>
                                {modalContent.status}
                            </i>
                        </span>
                    </div>

                    {modalContent.complemento !== '' && (
                        <>
                            <h3>Complemento</h3>
                            <p>{modalContent.complemento}</p>
                        </>
                    )}

                </main>
            </div>
        </div>
    )

}

export default Modal