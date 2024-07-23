import { useState } from "react";
import  { createUserWithEmailAndPassword, user } from "firebase/auth"
import { auth } from "../Firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

function useAuth() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [user, setUser] = useState({})

    const navigate = useNavigate()

    const singUp = async ( {email, password, name, surname} ) => {
        setIsLoading(true)
        await  createUserWithEmailAndPassword(auth, email, password , name, surname).then(res => {
            setUser(res.user);
            setIsLoading(false);
            navigate("/")
        }).catch(error => {
            const result = error
            setError(result.message)
        })
        .catch(() => setIsLoading(false))
    }

    const singIn = () => {}

    const logout = () => {}

    // const singUp = () => {}

    return (
        singIn, singUp, logout, user, isLoading, error


    );
}

export default useAuth;