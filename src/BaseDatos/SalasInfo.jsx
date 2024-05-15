import Tweet from "./Info/Info_1"

import { useState } from "react"
import { Link } from 'react-router-dom';

const DEFAULT_TWEETS = [
  {
    "id": "1",
    "sala": "norte",
    "torre": 1,
    "piso": 1,
    "pacientes": ["Juan", "Luis"],
    "personal_enfermeria": ["Oscar", "Luz", "María"],
    "personal_medico": ["Mario", "Juanito", "El Pibe"]
  },
  {
    "id": "2",
    "sala": "sur", "torre": 2, "piso": 2, "pacientes": ["Ana", "Pedro"], "personal_enfermeria": ["Elena", "Miguel", "Laura"], "personal_medico": ["Luisa", "Carlos", "Pablo"]
  },

  { "id": "3", "sala": "este", "torre": 1, "piso": 3, "pacientes": ["María", "José"], "personal_enfermeria": ["Alejandro", "Lucía", "Valentina"], "personal_medico": ["Javier", "Carmen", "Roberto"] },
  { "id": "4", "sala": "oeste", "torre": 2, "piso": 4, "pacientes": ["Luisa", "Andrés"], "personal_enfermeria": ["Gabriela", "Diego", "Natalia"], "personal_medico": ["Ricardo", "Fernanda", "Santiago"] },
  { "id": "5", "sala": "norte", "torre": 1, "piso": 2, "pacientes": ["Carlos", "Camila"], "personal_enfermeria": ["Julia", "Gustavo", "Adriana"], "personal_medico": ["Eduardo", "Marina", "Daniel"] },
  { "id": "6", "sala": "sur", "torre": 2, "piso": 1, "pacientes": ["Sofía", "Martín"], "personal_enfermeria": ["Manuel", "Ana", "Patricia"], "personal_medico": ["Joaquín", "Renata", "Hugo"] },
  { "id": "7", "sala": "este", "torre": 1, "piso": 4, "pacientes": ["Silvia", "Roberto"], "personal_enfermeria": ["Lorena", "Francisco", "Lucas"], "personal_medico": ["Natalia", "Diego", "Florencia"] },
  { "id": "8", "sala": "oeste", "torre": 2, "piso": 3, "pacientes": ["Marta", "Héctor"], "personal_enfermeria": ["Germán", "Brenda", "Rocío"], "personal_medico": ["Agustina", "Gonzalo", "Valeria"] },
  { "id": "9", "sala": "norte", "torre": 1, "piso": 3, "pacientes": ["Fernando", "Cecilia"], "personal_enfermeria": ["Antonio", "Carolina", "Sergio"], "personal_medico": ["Verónica", "Ramiro", "Paola"] },
  { "id": "10", "sala": "sur", "torre": 2, "piso": 4, "pacientes": ["Rosa", "Eduardo"], "personal_enfermeria": ["Eva", "Lautaro", "Marcela"], "personal_medico": ["Cristina", "Martín", "Julieta"] }
]

function Tweets() {

  const [tweets] = useState(DEFAULT_TWEETS)


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