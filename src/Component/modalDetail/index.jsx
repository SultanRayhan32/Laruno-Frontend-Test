import React from 'react'

// MODAL MODULE
import Modal from 'react-modal';

// REDUX MODULE
import {  useSelector , useDispatch} from 'react-redux'

// GLOBAL ACTION
import { setModal } from '../../Redux/Actions'

// STYLE
import './style.css'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      border : '0.3px solid #DDDDDD'
    }
};

Modal.setAppElement('#root')

function ModalDetail () {

    const dispatch = useDispatch()

    // CALL GLOBAL STATE
    const { 
        selectedDetail
    } = useSelector( state=> state.data)

    const modalData = useSelector(state=>state.modal.modalIsOpen)

    if (selectedDetail) {
        return (
            <Modal
                isOpen={modalData}
                onRequestClose={e=>dispatch(setModal(false))}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal-content content-modal-99" >
            
                    <div className="modal-detail-img-99">
                        <img src={selectedDetail.Poster} alt="detail"/>
                    </div>

                    <div className="modal-detail-content1-99">
                        <b>{selectedDetail.Title}</b>
                        <span>{"Year : " + selectedDetail.Year}</span>
                        <span>{"Type : " + selectedDetail.Type}</span>
                        <span>Rating :</span>
                        <div style={{display : "flex"}}>
                            <span 
                                className="fa fa-star modal-star-rating"
                            >
                            </span>
                            <span 
                                className="fa fa-star modal-star-rating"
                            >
                            </span>
                            <span 
                                className="fa fa-star modal-star-rating"
                            >
                            </span>
                            <span 
                                className="fa fa-star modal-star-rating"
                            >
                            </span>
                        </div>
                        <span>
                            Description :  
                        </span>
                        <span >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        </span>
                    </div>

                </div>

            </Modal>
        )
    }else {
        return (
            <Modal
                isOpen={modalData}
                onRequestClose={e=>dispatch(setModal(false))}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="modal-content content-modal-99" >
    
                </div>
            </Modal>
        )
    }

}

export default ModalDetail