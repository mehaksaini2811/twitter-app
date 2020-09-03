import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
function Test(){

    const[show, setShow] = useState(false);
    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
            Launch Demo Modal
        </Button>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} animation={false}>
            <Modal.Header >
                <Modal.Title>Modal Heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>This is the modal body</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClose}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}
export default Test;