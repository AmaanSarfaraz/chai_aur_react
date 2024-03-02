import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const Passwordgenerator = () => {
  const [passlength, setPasslength] = useState(10);
  const [addnumber, setAddnumber] = useState(false);
  const [addchar, setAddchar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordref = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWYZabcdefghijklmnopqrstuvwxyz";
    if (addnumber) str += "0123456789";
    if (addchar) str += "!@#$%^&*()_+-=[]{}|;':\"<>/?";
    for (let i = 0; i < passlength; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [passlength, addnumber, addchar, setPassword]);
  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current.select();
    passwordref.current.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  }, [passlength, addnumber, addchar, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [passlength, addnumber, addchar, passwordGenerator]);
  return (
    <div className=" w-screen max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-screen py-1 px-3 bg-white"
          ref={passwordref}
          readOnly
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-o.5 shrink-0"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            className="cursor-pointer"
            value={passlength}
            min={6}
            max={100}
            onChange={(e) => {
              setPasslength(e.target.value);
            }}
          />
          <label>Length: {passlength}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="addnum"
            defaultChecked={addnumber}
            onChange={() => {
              setAddnumber((prev) => !prev);
            }}
          />
          <label htmlFor="addnum">Add Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="addchar"
            defaultChecked={addchar}
            onChange={() => {
              setAddchar((prev) => !prev);
            }}
          />
          <label htmlFor="addchar">Add Characters</label>
        </div>
      </div>
    </div>
  );
};

export default Passwordgenerator;
