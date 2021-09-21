import React, { useEffect,useState } from "react"
import { Link } from "react-router-dom"
import {listDecks} from "../../utils/api";

export default function Home() {
  const [decks,setDecks] = useState([]);
  const [cards,setCards] = useState([])
  useEffect(()=> {
  const abortController = new AbortController();
  async function fetchDecks() {
    const decksData = await listDecks(abortController.signal)
    setDecks(decksData)
    
  }
  fetchDecks()
  
},[])




  return (
    <>
      <div class="mr-2">
        <Link to="/decks/new">
          <button type="button" class="btn btn-secondary">
            <span className="oi oi-plus mr-2"></span>
            Create Deck</button>
        </Link>
      </div>
      <div class="card col-6" >
        <div class="card-body">
          {decks.map((deck,index)=> (
            <>
            <h5 class="card-title">{deck.name}
            <span ></span>{decks.length}</h5>
            <p class="card-text">{deck.description}</p>
            <div class="d-grid gap-4 d-md-block">
          
            <Link>
              <button class="btn btn-primary" type="button"><span class="oi oi-eye"></span>View</button>
            </Link>
            <Link to="/decks/:deckId/study">
              <button class="btn btn-primary" type="button"> <span class="oi oi-book mr-1"></span>Study</button>
            </Link>
            <Link>
              <span  class="oi oi-trash"></span>
            </Link> 
            </div>
            
            </>
          ))}
         
         

        </div>
      </div>

    </>
  )
}