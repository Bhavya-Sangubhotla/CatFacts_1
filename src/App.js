import react from "react";
import { useState } from "react";

function App() {
  const [fact, setFact] = useState({
    fact: "",
    length: 0,
  });
  const [toggle, setToggle] = useState(false);
  const [change, setChange] = useState("");
  const [title, setTitle] = useState("");

  async function fetchFatcs() {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    setFact({
      fact: data.fact,
      length: data.length,
    });
    handleClick();
  }

  function handleClick() {
    setToggle(true);
  }
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setChange(value);
  }
  function handleTitleChange() {
    setTitle(change);
    console.log(title);
  }

  return (
    <div className="inner-box">
      <input
        className="box"
        type="text"
        name="userName"
        placeholder="Enter user Name"
        autoComplete="false"
        onChange={handleChange}
        value={change}
        onBlur={handleTitleChange}
      />
      {!(title === "") ? <h1>Hi {title}!</h1> : null}
      <h1>🐈‍⬛ cat facts for you! 🐈‍⬛</h1>
      <button onClick={fetchFatcs} className="btn btn-large">
        click
      </button>
      {toggle ? <p>{fact.fact}</p> : null}
    </div>
  );
}
export default App;
