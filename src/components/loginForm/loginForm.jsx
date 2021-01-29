import React, {useState, useEffect} from "react";
import axios from 'axios';

import { useAppContext } from "../../libs/contextLib.jsx";

import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import "./loginForm.styles.css"

const LoginForm = () => {
    const { userHasAuthenticated } = useAppContext();

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setValidated(false);
    }
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const [username, setUsername] = useState("");

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            axios.post("https://swype-bts-macaronic.herokuapp.com/api/get_user",
                {data:{username: username}, mode: "no-cors"})
            .then(response => {
                console.log(response.data)
            }).catch(error => console.log(error))
            
            handleClose();
        }

        setValidated(true);
    }

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
        Log in / Sign up
        </Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Log in / Sign up</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form className="" noValidate validated={validated}
                onSubmit={handleSubmit}
                >
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    required
                    type="text" 
                    placeholder="Enter username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>

            </Modal.Body>
        </Modal>
        </>
        
    )
}

export default LoginForm


