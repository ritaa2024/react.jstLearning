import { useCallback, useEffect, useState,useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const Home=()=>{

  const [length, setLength] = useState(8);
  const [password, setPassword] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [isCopied, setIsCopied] = useState(false); // State to track if copied

//useref
const passwordRef = useRef(null)

  const passwordG = useCallback(() => {
    let pass = "";
    let str = "HJuVJlGoLNGFSnnjgfkcvsTkoasfgh";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) {
      console.log("gohh", charAllowed);

      str += "!#@$%^&*+_={}[]";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      console.log("char00", char);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

const copyPassToClipboard = useCallback(()=>{
passwordRef.current?.select();
passwordRef.current?.setSelectionRange(0,20)
window.navigator.clipboard.writeText(password)
setIsCopied(true);
setTimeout(()=>setIsCopied(false),2000)
},[password])

  useEffect(() => {
    passwordG();
  }, [length, numberAllowed, charAllowed, passwordG]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-40 py-7 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 h-10"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassToClipboard} className={`outline-none px-4 py-1 shrink-0 ${isCopied?"bg-green-600":"bg-blue-600"} text-white transition-colors duration-300  `}>
          {isCopied ? "copied!":"copy"}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="felx items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
