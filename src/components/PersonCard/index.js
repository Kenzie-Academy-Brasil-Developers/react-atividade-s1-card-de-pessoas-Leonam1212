const PersonCard = ({name, age, country}) => {

return (
    <div className = "UsarCard" >
        <span>
            <p>Dev: {name}</p>
         </span>
        <span>
            <p>Idade: {age}</p>
        </span>
        <span>
            <p>Country: {country}</p>
        </span>
    </div>
    
   )
}

export default PersonCard