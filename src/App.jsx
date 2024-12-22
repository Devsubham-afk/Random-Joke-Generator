import { useState } from "react";

function App(){

  const refreshJoke = async ()=>{
   try{
    const res = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await res.json()
    const joke = data.value;
    console.log(data);
    setJoke(joke)
   }catch (err) {
    console.log(err);
    alert("Error Occured")
   }
  }

  const [joke,setJoke] = useState("");

  return(
    <div>
      <h1>Random Jokes Generator</h1>
      <p>{joke}</p>
      <button onClick={refreshJoke}>Get Jokes!</button>
    </div>
  );
}
export default App;