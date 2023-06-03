import axios from "axios";
import { ErrorToast, SuccessToast } from "../helper/FormHelper";
import { getToken, setToken } from "../helper/SessionHelper";

const BaseURL = "http://localhost:8080/api/v1"
const AxiosHeader = { headers: { "token": getToken() } }

export function RegistrationRequest(name, email, password) {


    let URL = BaseURL + "/register";
    let PostBody = { name: name, email: email, password: password }
    return axios.post(URL, PostBody).then((res) => {


        if (res.status === 200) {
            if (res.data['status'] === "fail") {
                if (res.data['data']['keyPattern']['email'] === 1) {

                    ErrorToast("Email Already Exist")
                    return false;
                }
                else {
                    ErrorToast("Something Went Wrong")
                    return false;
                }
            }
            else {
                SuccessToast("Registration Success")
                return true;
            }
        }
        else {
            ErrorToast("Something Went Wrong")
            return false;
        }
    }).catch((err) => {

        ErrorToast("Something Went Wrong")
        return false;
    })
}



export function LoginRequest(email, password) {

    let URL = BaseURL + "/login";
    let PostBody = { "email": email, "password": password }
    return axios.post(URL, PostBody).then((res) => {

        if (res.status === 200) {
            setToken(res.data['token']);
            SuccessToast("Login Success")
            return true;
        }
        else {
            ErrorToast("Invalid Email or Password")
            return false;
        }
    }).catch((err) => {
        ErrorToast("Something Went Wrong")

        return false;
    });
}


