

import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function RegisterUserModal(props){

    const [currentStep, setCurrentStep]=useState(1);
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[dateOfBirth, setDateOfBirth]=useState('');
    const[check, setCheck]=useState(false)

    const nextButton=()=>{
        if(currentStep === 3){
            return null;
        }
        return(
            <button class="btn btn-primary float-right" onClick={()=>setCurrentStep(currentStep+1)}>Next</button>
        )
    }

    const previousButton=()=>{
        if(currentStep === 1)
            return null;
        return(
            <button className="btn btn-secondary float-left" onClick={()=>setCurrentStep(currentStep-1)}>Previous</button>
        )
    }
    const handleChange = event =>{
        
        if(event.target.name === 'name'){
            setName(event.target.value)
        }
        else if(event.target.name === 'email'){
            setEmail(event.target.value)
        }
        else if(event.target.name === 'dob'){
            setDateOfBirth(event.target.value)
        }
        else if(event.target.name === 'check'){
            setCheck(event.target.value)
        }
    }
    
    return(
    <div>
        <Modal 
        {...props} 
        size="lg" 
        aria-labelledby="contained-modal-title-vcenter"
        centred>
        <Step1 stepNumber={currentStep} name={name} email={email} dateOfBirth={dateOfBirth} change={handleChange}></Step1>
        <Step2 stepNumber={currentStep} check={check} change={handleChange}></Step2>
        <Step3 stepNumber={currentStep} name={name} email={email} dateOfBirth={dateOfBirth}></Step3>
        {nextButton()}
        {previousButton()}
        </Modal>
    </div>
    )
}

function Step1(props){
    
    if(props.stepNumber !== 1){
        return null;
    }
    
    return(
            <div className="col-md-4 col-md-offset-4">
                <div className="form-group">
                <label for="name">Name</label>
                <input type="name" class="form=control" name="name" id="name" value={props.name} placeholder="Enter your Name" onChange={props.change} />
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form=control" name="email" value={props.email}id="registerEmail" placeholder="Enter your Email address" onChange={props.change}/>
            </div>
            <div class="form-group">
               <label for="dateOfBirth">Date of birth</label>
               <input type="date" class="form-control" id="dob" name="dob" value={props.dateOfBirth} onChange={props.change} />
            </div>
            </div>
    )
}
function Step2(props){
    if(props.stepNumber !== 2)
        return null;
    return(
        <div>
            <h2><strong>Customize your experience</strong></h2><br/>
            <h3><strong>Track where you see Twitter content across the web</strong></h3>
            <div className="form-check">
                <label htmlFor="info" className="col-sm-10">
                    Twitter uses this data to personalize your experience. This web browsing history will never be stored with you name, email or phone number
                </label>
                <input type="checkbox" name="check" className="form-check-input" id="signup-check" checked={props.check} onChange={props.change}></input>
            </div>
        </div>
    )
}

function Step3(props){
    if(props.stepNumber !== 3)
        return null;
    return(
        <UserForm name={props.name} email={props.email} dateOfBirth={props.dateOfBirth}/>
    )
}

const UserForm=(props)=>{
    return(
            <div>
                <div className="form-group">
                <label for="name">Name</label>
                <input type="name" class="form=control"  value={props.name}  readOnly/>
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form=control"  value={props.email} readOnly/>
            </div>
            <div class="form-group">
               <label for="dateOfBirth">Date of birth</label>
               <input type="date" class="form-control" value={props.dateOfBirth} readOnly/>
            </div>
            <div class="col-md-12 text-center">
                <button className="btn btn-primary float-center">Sign Up</button>
            </div>
            </div>
    )
}

export default RegisterUserModal;
