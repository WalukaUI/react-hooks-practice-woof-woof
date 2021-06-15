import React, { useEffect, useState } from "react";
import Dog from "./Dog"
import DogInfo from "./DogInfo"

function App() {
  const [dogs, setDogs] = useState([])
  const [setlectedDog,setselectedDog]=useState(null)
  const [filter,setFilter]=useState(false)
  
  const URL = " http://localhost:3001/pups"
  useEffect(() => {
    const headers = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
    fetch(URL, headers)
      .then(r => r.json())
      .then(j => setDogs(j))
  }, [])

function changeDogGoodBad(ID,isGood){
  let cahnger={isGoodDog:!isGood}
  const headers = {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(cahnger)
  }
  fetch(`${URL}/${ID}`,headers)
    .then(r => r.json())
    .then(j =>{
      let restofDogs=dogs.filter((e)=>e.id!==ID)
      let newdogs=[...restofDogs,j]
      setDogs(newdogs)
      setselectedDog(j)
    } )
}

const cahngeFilter=filter? dogs.filter((e)=>e.isGoodDog===true):dogs

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={()=>setFilter(!filter)}>Filter good dogs: {filter?"ON":"OFF"}</button>
      </div>
      <div id="dog-bar">
        {cahngeFilter.map((e) => <Dog key={e.id} Id={e} name={e.name} displayDogInfo={setselectedDog} />)}
      </div>
      <DogInfo  adog={setlectedDog} changeDogGoodBad={changeDogGoodBad}/>
    </div>
  )
}

export default App;
