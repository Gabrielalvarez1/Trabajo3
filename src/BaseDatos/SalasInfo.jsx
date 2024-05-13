import Tweet from "./Tweet/Tweet"
//import CreateTweet from "../Otros/components/CreateTweet/CreateTweet"
import { useState } from "react"

const DEFAULT_TWEETS = [
  {
  "id": "1",
  "sala": "norte",
  "torre": 1,
  "piso": 1,
  "pacientes": ["Juan", "luis"],
  "personal_enfermeria": ["oscar", "luz", "maría"],
  "personal_medico": ["mario", "juanito", "el pibe"] 
},
  /*
  {
    "id": "1",
    "text": "Just saw the most beautiful sunset! 🌅",
    "user": "@juan",
    "name": "Juan",
    "timestamp": "2024-04-20T18:30:00Z",
    "replays": 15,
    "reposts": 10,
    "likes": 150,
    "views": 10,
    "profileImage": "https://randomuser.me/api/portraits/men/0.jpg",
    "isLiked": false,
  },
  {
    "id": "2",
    "text": "Excited to announce I'm starting a new job at @TechInnovate!",
    "user": "@laura",
    "name": "Laura",
    "timestamp": "2024-04-19T09:00:00Z",
    "replays": 20,
    "reposts": 10,
    "likes": 230,
    "views": 10,
    "profileImage": "https://randomuser.me/api/portraits/women/0.jpg",
    "isLiked": false,
  }
  */
]

function Tweets() {

  const [ tweets ] = useState(DEFAULT_TWEETS)
 // const [ tweets, setTweets ] = useState(DEFAULT_TWEETS)
/*
  const currentUser = {
    user: "@luis",
    name: "Luis",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  }
  */
  

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
    /*
    // TODO enviar a crear el twwet en el server
    setTweets([
      tweet,
      ...tweets,
    ]) */
  }

  return (
    <>
      {/* <CreateTweet onCreate={createTweet} /> */}
      <section>
        {tweets.map((tweet) => <Tweet key={tweet.id} data={tweet}></Tweet>)}
      </section>
    </>
  )
}

export default Tweets