function Dog({Id,name, displayDogInfo}){
function displayInfo(e){
    e.preventDefault()
    displayDogInfo(Id)
}

return <div className="dog" onClick={displayInfo}>
      <p>{name}</p>
    </div>
}

export default Dog