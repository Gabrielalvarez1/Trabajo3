import { useContext } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

function Layout() {

    const [setIsLogged] = useOutletContext()
    const user = useContext(UserContext);

    return (
        <>
            <header className="bg-teal-600 flex justify-between items-center h-16">
                <div className="flex justify-between items-center p-4">
                    <h1 className="text-2xl font-bold leading-6 whitespace-nowrap">Sistema Gestion Hospitalaria</h1>
                </div>
                <div className="container mx-auto p-2 flex justify-end items-center">
                    <p className="px-3 py-1 bg-cyan-950 text-white rounded mr-2">{user?.name}</p>
                    <button className="px-2 py-1 bg-cyan-950 text-white rounded " onClick={() => setIsLogged(false)}>Log Out</button>
                </div>

            </header>
    
            <Outlet />
        </>
    )
}

export default Layout