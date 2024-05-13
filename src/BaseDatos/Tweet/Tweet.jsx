import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRetweet, faChartSimple, faArrowUpFromBracket, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faComment, faHeart, faBookmark, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import dayjs from 'dayjs'
//import { useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import './Tweet.css'
import { useNavigate } from "react-router-dom"



function Tweet({ data, onDelete }) {
    const navigate = useNavigate()
    /*
        // Hooks
        const [isLiked, setIsLiked] = useState(data.isLiked)
        const [likes, setLikes] = useState(data.likes)
        const navigate = useNavigate()
    
        function goToTweet(id) {
            navigate(`/tweets/${id}`)
        }
    
        function addLike(event) {
            event.stopPropagation()
            // TODO Deberia llamar una API donde se cocume un servicio de dar like
            if (!isLiked) {
                data.likes += 1
                data.isLiked = true
            } else {
                data.likes -= 1
                data.isLiked = false
            }
            setLikes(data.likes)
            setIsLiked(data.isLiked)
        }
        
    
        function deleteTweet(tweetId, event) {
            event.stopPropagation()
            onDelete(tweetId)
        }
    */

    return (



        <div className="bg-sky-100 min-h-screen">

            <main className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-16 place-items-center justify-items-center">


                    <button className="bg-cyan-950 rounded-3xl shadow size-60 hover:scale-105 hover:bg-cyan-800 w-3/5 h-25 " onClick={() => navigate('/salas')}>
                        <div className="flex justify-center items-center">

                            <div className='flex justify-between items-center'>

                                <p>Sala: {data.sala}</p>
                            </div>



                            <p>Torre: {data.torre}</p>
                            <p>Piso: {data.piso}</p>
                            <p>Pacientes en la sala: {data.pacientes}</p>
                            <p>Personal de enfermeria asignados a esta sala: {data.personal_enfermeria}</p>
                            <p>Personal medico asignados a esta sala: {data.personal_medico}</p>
                        </div>
                        { /* 
                        <div className="flex items-center p-2 justify-center">
                            <h2 className="text-lg font-bold leading-tight p-1">Salas / ubicaciones</h2>
                        </div>
                        <p className="text-gray-400 justify-center p-1">Gestiona las salas y ubicaciones del hospital.</p>
    */}
                    </button>
                </div>
            </main >
        </div >

        /*
            <article className="flex p-8 gap-4 w-4/5 cursor-pointer justify-items-center bg-teal-100    "  onClick={() => goToTweet(data.id)} >
                <div><img className="w-10 h-10 rounded-full" src={data.profileImage} alt={data.name} /></div>
                <div className="flex flex-col gap-1 flex-1">
                    <div className='flex justify-between items-center'>
                        <div className="flex gap-1">
                            <a className="font-bold hover:underline" href="#">{data.name}</a>
                            <a className="text-neutral-500" href="#">{data.user}</a>
                            <span className="text-neutral-500">·</span>
                            <span className="text-neutral-500">{dayjs(data.timestamp).format('MMM DD')}</span>
                        </div>
                        {onDelete && <button onClick={(e) => deleteTweet(data.id, e)}><FontAwesomeIcon className='justify-self-end' icon={faTrashCan} /></button>}
                    </div>
                    <div>
                        <p>{data.text}</p>
                    </div>
                    <div className='pt-2'>
                        <ul className="flex justify-between">
                            <li className='flex gap-2 items-center'><button className='text-neutral-500 hover:text-sky-600 transition'><FontAwesomeIcon icon={faComment} /> <span>{data.replays}</span></button></li>
                            <li className='flex gap-2 items-center'><button className='text-neutral-500 hover:text-green-500 transition'><FontAwesomeIcon icon={faRetweet} /> <span>{data.reposts}</span></button></li>
                            <li className='flex gap-2 items-center'><button className={`text-neutral-500 ${isLiked ? 'text-pink-600' : 'hover:text-pink-600'} transition`} onClick={addLike}>
                                <FontAwesomeIcon className={isLiked ? 'heart' : ''} icon={isLiked ? faHeartSolid : faHeart} /> <span>{likes}</span>
                            </button></li>
                            <li className='flex gap-2 items-center'><button className='text-neutral-500 hover:text-sky-600 transition'><FontAwesomeIcon icon={faChartSimple} /> <span>{data.views}</span></button></li>
                            <li className='flex gap-3 items-center'>
                                <button className='text-neutral-500 hover:text-sky-600 transition'><FontAwesomeIcon icon={faBookmark} /></button>
                                <button className='text-neutral-500 hover:text-sky-600 transition'><FontAwesomeIcon icon={faArrowUpFromBracket} /></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
            */
    )
}

export default Tweet;