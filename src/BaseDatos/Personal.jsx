import Tweet from "./Info/Info_2"

import { useState } from "react"
import { Link } from 'react-router-dom';





const DEFAULT_TWEETS = [
  {
    "id": "0002",
    "nombre": "Laura",
    "Edad": 33,
    "Cargo": "Enfermera",
    "Ubicación": "2"
  },
  {
    "id": "0003",
    "nombre": "Pablo",
    "Edad": 40,
    "Cargo": "Médico Residente",
    "Ubicación": "3"
  },
  {
    "id": "0004",
    "nombre": "María",
    "Edad": 28,
    "Cargo": "Jefe de Enfermería",
    "Ubicación": "4"
  },
  {
    "id": "0005",
    "nombre": "Alejandro",
    "Edad": 45,
    "Cargo": "Anestesiólogo",
    "Ubicación": "1"
  },
  {
    "id": "0006",
    "nombre": "Sofía",
    "Edad": 27,
    "Cargo": "Pediatra",
    "Ubicación": "2"
  }
,
{
  "id": "0007",
  "nombre": "Juan",
  "Edad": 35,
  "Cargo": "Cirujano",
  "Ubicación": "3"
}
,
{
  "id": "0008",
  "nombre": "Elena",
  "Edad": 42,
  "Cargo": "Enfermera",
  "Ubicación": "4"
}
,
{
  "id": "0009",
  "nombre": "Luis",
  "Edad": 30,
  "Cargo": "Ginecólogo",
  "Ubicación": "1"
}
,
{
  "id": "0010",
  "nombre": "Carolina",
  "Edad": 37,
  "Cargo": "Cardiólogo",
  "Ubicación": "2"
}
,
{
  "id": "0011",
  "nombre": "Diego",
  "Edad": 29,
  "Cargo": "Enfermero",
  "Ubicación": "3"
}
,
{
  "id": "0012",
  "nombre": "Ana",
  "Edad": 44,
  "Cargo": "Médico de Familia",
  "Ubicación": "4"
}
,
{
  "id": "0013",
  "nombre": "Gonzalo",
  "Edad": 32,
  "Cargo": "Psiquiatra",
  "Ubicación": "1"
}
,
{
  "id": "0014",
  "nombre": "Valentina",
  "Edad": 39,
  "Cargo": "Nutricionista",
  "Ubicación": "2"
}
,
{
  "id": "0015",
  "nombre": "Javier",
  "Edad": 31,
  "Cargo": "Terapeuta Ocupacional",
  "Ubicación": "3"
}
,
{
  "id": "0016",
  "nombre": "Lucía",
  "Edad": 48,
  "Cargo": "Fisioterapeuta",
  "Ubicación": "4"
}
]
    
function Tweets() {

  const [ tweets ] = useState(DEFAULT_TWEETS)


  function createTweet(text) {
    const tweet = {
      id: String(tweets.length + 1),
      text,
      timestamp: new Date().toISOString(),
      replays: 0,
      reposts: 0,
      likes: 0,
      views: 0,
      isLiked: false,
    }
    
  }

  return (
    <>
    <div className="bg-teal-600 text-gray-700 w-20">
    <Link to="/" className="block p-2 rounded-md text-white hover:bg-blue-700">Regresar</Link>
    </div>
      <section>
        {tweets.map((tweet) => <Tweet key={tweet.id} data={tweet}></Tweet>)}
      </section>
    </>
  )
}

export default Tweets