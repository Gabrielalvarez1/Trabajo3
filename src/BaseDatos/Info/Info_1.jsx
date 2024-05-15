



{/*
function Tweet({ data, onDelete }) {
*/}
function Tweet({ data }) {




    return (
        <>
            < div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-12 place-items-center justify-items-center'>
                <div className=" bg-gray-300 hover:bg-gray-400 rounded-3xl shadow size-60  p-4 w-3/5 h-1/7  ">
                    <div className="flex items-center p-2 justify-center">
                        <h2 className="text-black text-lg font-bold leading-tight">Ubicación</h2>
                    </div>
                    <p className="flex text-black justify-center place-items-center">Sala: {data.sala} Torre: {data.torre} Piso: {data.piso} </p>
                    <p className="flex text-black justify-center place-items-center">Pacientes: {data.pacientes.join(", ")}</p>
                    <p className="flex text-black justify-center place-items-center"> Personal de enfermeria: {data.personal_enfermeria.join(", ")}</p>
                    <p className="flex text-black justify-center place-items-center"> Personal medico: {data.personal_medico.join(", ")} </p>
                </div>
            </div>

        </>

    )
}

export default Tweet;