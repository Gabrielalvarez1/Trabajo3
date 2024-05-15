



{/*
function Tweet({ data, onDelete }) {
*/}
function Tweet({ data }) {




    return (
        <>
            < div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-12 place-items-center justify-items-center'>
                <div className=" bg-gray-300 hover:bg-gray-400 rounded-3xl shadow size-60  p-4 w-3/5 h-1/7  ">
                    <div className="flex items-center p-2 justify-center">
                        <h2 className="text-black text-lg font-bold leading-tight">Perfil personal</h2>
                    </div>
                    <p className="flex text-black justify-center place-items-center">Nombre: {data.nombre} </p>
                    <p className="flex text-black justify-center place-items-center">edad: {data.Edad}  </p>
                    <p className="flex text-black justify-center place-items-center">Cargo: {data.Cargo}</p>
                    <p className="flex text-black justify-center place-items-center"> Ubicación: {data.Ubicación}</p>
                
                </div>
            </div>

        </>

    )
}

export default Tweet;