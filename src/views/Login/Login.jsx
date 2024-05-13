import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

const USER_LOGIN_DEFAULT = {
    username: 'user',
    password: '1234'
}

function Login() {

    const navigate = useNavigate()
    const [setIsLogged] = useOutletContext();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function login(event) {
        event.preventDefault()
        
        if (username === USER_LOGIN_DEFAULT.username && password === USER_LOGIN_DEFAULT.password) {
            setIsLogged(true)
            navigate('/main')
        } else {
            console.log('usuario incorrecto')
        }
    }

    return (
        <>
        <div>
            <h1 className="bg-teal-600 text-black">Usuario=user /password=1234</h1>
        </div>
        <div className="bg-teal-600 text-black h-screen overflow-hidden flex items-center justify-center">
            <div className="bg-teal-800 lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
                <div className="bg-sky-300 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={60} height={60}><path fill="#000000" d="M142.4 21.9c5.6 16.8-3.5 34.9-20.2 40.5L96 71.1V192c0 53 43 96 96 96s96-43 96-96V71.1l-26.1-8.7c-16.8-5.6-25.8-23.7-20.2-40.5s23.7-25.8 40.5-20.2l26.1 8.7C334.4 19.1 352 43.5 352 71.1V192c0 77.2-54.6 141.6-127.3 156.7C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112V265.3c-28.3-12.3-48-40.5-48-73.3c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V336c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1C87.2 334.2 32 269.6 32 192V71.1c0-27.5 17.6-52 43.8-60.7l26.1-8.7c16.8-5.6 34.9 3.5 40.5 20.2zM480 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
                
                </div>
                <form className="p-12 md:p-24" onSubmit={login}>
                    <div className="flex items-center text-lg mb-6 md:mb-8">
                        <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                        </svg>
                        <input type="text" id="username" className="bg-sky-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="flex items-center text-lg mb-6 md:mb-8">
                        <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                        </svg>
                        <input type="password" id="password" className="bg-sky-200 pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="bg-gradient-to-b from-cyan-950 to-teal-950 font-medium p-2 md:p-4 text-white uppercase w-full">Ingresar</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login