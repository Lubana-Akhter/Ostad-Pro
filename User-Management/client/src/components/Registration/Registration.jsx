import React, { Fragment, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import { ErrorToast, IsEmail, IsEmpty } from "../../helper/FormHelper";
import { Link, useNavigate } from 'react-router-dom';
import { RegistrationRequest } from '../../APIRequest/APIRequest';

const Registration = () => {

    let nameRef, emailRef, passwordRef = useRef();
    let navigate = useNavigate();

    const onRegistration = () => {
        let name = nameRef.value;
        let email = emailRef.value;
        let password = passwordRef.value;

        if (IsEmpty(name)) {
            ErrorToast("Name  Required !")
        }

        else if (IsEmail(email)) {
            ErrorToast("Valid Email Address Required !")
        }

        else if (IsEmpty(password)) {
            ErrorToast("Password Required !")
        }
        else {
            RegistrationRequest(name, email, password).then((result) => {
                if (result === true) {
                    navigate("/login")
                }
            })


        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row  justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card animated fadeIn w-100 p-3">
                            <div className="card-body">
                                <h5>Sign Up</h5>
                                <hr />
                                <label>Name</label>
                                <input ref={(input) => nameRef = input} placeholder="Name" className="form-control animated fadeInUp" type="text" />
                                <br />
                                <label>Email Address</label>
                                <input ref={(input) => emailRef = input} placeholder="User Email" className="form-control animated fadeInUp" type="email" />
                                <br />
                                <label>Password</label>
                                <input ref={(input) => passwordRef = input} placeholder="User Password" className="form-control animated fadeInUp" type="password" />
                                <br />
                                <button onClick={onRegistration} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Next</button>
                                <div className="text-center w-100">
                                    <Link className="text-center" to='/login'>Sign in</Link><br />
                                  
                                </div>

                            </div>

                        </div>



                    </div>
                </div>
            </div>
            <Toaster />
        </Fragment>
    );
};

export default Registration;