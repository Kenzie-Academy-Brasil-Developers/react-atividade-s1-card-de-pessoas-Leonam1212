import logo from './logo.svg';
import './App.css';
import PersonCard from "./components/PersonCard"

function App() {
  const users = [
    {
     name: "Maria",
     age: 30,
     country: "Brazil"
    
    },

    {
     name: "Nayla",
     age: 25,
     country: "USA"
    },

    {
     name: "Toman",
     age: 15,
     country: "Finland"
    },

  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    <div className = "style-cards">

      <div class="card card1">

      <PersonCard name = {users[0].name}
                  age = {users[0].age} 
                  country = {users[0].country}/>
      </div>
      
      <div class="card card2">

      <PersonCard name = {users[1].name}
                  age = {users[1].age} 
                  country = {users[1].country}/>
      </div>

      <div class="card card3">

      <PersonCard name = {users[2].name}
                  age = {users[2].age} 
                  country = {users[2].country}/>            

      </div>
  

    </div>
     
      </header>
    </div>
  );
}

export default App;
