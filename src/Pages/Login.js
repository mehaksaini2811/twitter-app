import React, { useState } from 'react';
import RegisterUserModal from './RegisterUserModal';

function Login() {
    const [modalShow, setModalShow] = useState(false)
    return (
        <>
            <div className="container">
                <h1 className="text-center">Welcome to Twitter</h1>
                <div className="row">

                    <aside className="col-md-5 mx-auto ">

                        <div className="card">
                            <article className="card-body">
                                <form>
                                    <div class='form-group'>
                                        <label for='email'>Email</label>
                                        <input type="email" class="form-control" id="email" placeholder="Enter your email address"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter your password"></input>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </form>
                            </article>
                        </div>
                    <h2 className="text-center">See what's happening in the world right now</h2>
                                <p className="text-center"> Join Twitter Today</p>
                                <div className="col-md-13 text-center">
                                    <button type="button" class="btn btn-primary" onClick={() => setModalShow(true)}>Sign Up</button>
                                </div>
                                <RegisterUserModal show={modalShow} onHide={() => setModalShow(false)}></RegisterUserModal>
                    </aside>
                </div>

            </div>

        </>
    )
}

export default Login;
