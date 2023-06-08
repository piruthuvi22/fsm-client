import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ForgetPasswordModal from "../components/ForgetPasswordModal";
import ChangePasswordModal from '../components/ChangePasswordModal';



function Login() {
    const [show, setShow] = useState(false);
    const [open,setOpen]=useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleOpen = ()=> setOpen(true);
    const handleFinish=()=>setOpen(false);


    return (
        <div className="password">
            <div  className="container-md">


                <ForgetPasswordModal show={show} onHide={handleClose}/>
                <Button onClick={handleShow}>Forget Password</Button>
                <Button onClick={handleOpen}>Change Password</Button>
                <ChangePasswordModal show={open} onHide={handleFinish}/>

            </div>

        </div>
    );
}

export default Login;
