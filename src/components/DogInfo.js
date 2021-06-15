function DogInfo({adog,changeDogGoodBad}){
    function changeDog(e){
        changeDogGoodBad(adog.id,adog. isGoodDog)
    }
  if(!adog){ return <h1>click to display Dog info</h1>}else{

  return <div id="dog-summary-container">
  <h1>DOGGO:</h1>
  <div id="dog-info">
  <img src={adog.image} alt={adog.name} />
  </div>
  <h2>{adog.name}</h2>
  <button onClick={changeDog}>{adog.isGoodDog?"Good Dog":"Bad Dog"}</button>
</div>}

}
export default DogInfo