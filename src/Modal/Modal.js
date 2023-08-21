import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { TodoForm } from "../TodoForm/TodoForm.js";


function Modal({children}){
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="ModalBackground">
                <TodoForm/>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }