import { useState } from 'react'
import './App.css'

function App() {

  function useInput({ type /*...*/, placeholder }) {
    const [value, setValue] = useState("");
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} placeholder={placeholder} />;
    return [value, input];
  }

  const [getFirstName, setFirstName] = useInput({ type: "text", placeholder: 'Enter First Name' });
  const [getLastName, setLastName] = useInput({ type: "text" });

  return (
    <div className="App">
      <div>
        <h1>CV Template</h1>
      </div>
      <div className="row">
        <div className="column left">
          {setFirstName}

        </div>
        <div className="column right">
          {getFirstName}
        </div>
      </div>
    </div>
  )
}

export default App
