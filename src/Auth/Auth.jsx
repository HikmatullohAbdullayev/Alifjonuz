import { useState } from 'react'
import { auth } from '../Firebase/firebaseConfig'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [isRegister, setIsRegister] = useState(true)

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name,
        surname
      )
      console.log('Registered with:', userCredential.user)
      const userData = {
        ism: name,
        familya: surname,
        email: email,
        password: password,
        yoshi: age,
        jinsi: gender,
      }
      console.log(userData)
    } catch (error) {
      console.error('Error during registration:', error)
    }
  }

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
        name,
        surname
      )
      console.log('Bu hisob mavjud', userCredential.user)
    } catch (error) {
      console.error(
        "Error during login: xatolik bor qaytadan urinib ko'ring",
        error
      )
    }
  }

  return (
    <div>
      <h1>{isRegister ? 'Ro`yhatdan o`tish' : 'Kirish'}</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid gap-[16px] max-w-[400px] mx-auto"
      >
        <input
          type="text"
          placeholder="Ism"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Familya"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="number"
          placeholder="Yosh"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Jinsi"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={isRegister ? handleRegister : handleLogin}>
          {isRegister ? 'Ro`yhatdan o`tish' : 'Kirish'}
        </button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister
          ? 'Allaqachon hisobingiz bormi? Kirish'
          : "Hisobingiz yo'qmi? Ro'yxatdan o'ting"}
      </button>
    </div>
  )
}

export default Auth
// test uchun
