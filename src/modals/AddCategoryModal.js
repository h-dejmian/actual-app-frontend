import {useEffect, useState} from "react";
import Modal from 'react-modal';
import '../css/modal.css'
import Message from "../messages/Message";
import SubmitAndClose from "./SubmitAndClose";
import customStyles from "./style/ModalStyles";
import {api} from "../App";

function AddCategoryModal(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("");
    const [priority, setPriority] = useState(3)
    const [message, setMessage] = useState("");
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        setMessage("");
        resetState();
    }

    async function handleSubmitForm(e) {
        e.preventDefault();

        if(!isInputValid()) {
            return;
        }

        const category = await api.newCategoryFetch(name, priority, props.user.id, "REGULAR");

        props.addCategory(category);

        setIsOpen(false);
        resetState();
    }
    function resetState() {
        setName("");
        setPriority(0);
        setMessage("");
    }

    function isInputValid() {
        if(priority < 1 || priority > 7) {
            setMessage("Priority should be a number between 1 and 7")
            return false;
        }
        if(name === "") {
            setMessage("Category name cannot be empty")
            return false;
        }
        return true;
    }

    return (
        <div>
            <button className="button-lg" onClick={handleOpen}>Add New Category</button>
            <Modal
                isOpen={isOpen}
                ariaHideApp={false}
                style={customStyles}
                onRequestClose={handleClose}
                contentLabel="Create New Category"
            >
                <h2>New Category</h2>
                <hr/>
                <br/>
                <form onSubmit={handleSubmitForm} method="POST">
                    <label>Name</label>
                    <input type="text" value={name} placeholder={"Description"} onChange={(e) => setName(e.target.value)}/><br/>

                    <label>Priority</label>
                    <input  type="number" value={priority} min="1"  max="7" onChange={(e) => setPriority(e.target.value)}/> <br/>

                    <Message message={message} />

                    <SubmitAndClose handleSubmitForm={handleSubmitForm.bind(this)} handleClose={handleClose.bind(this)} />

                </form>
            </Modal>
        </div>
    )
}



export default AddCategoryModal;