import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [pressed, setpressed] = useState([]);
  
  const pushLogic = (i) => {
    let newArray = [...pressed];
    if(newArray.includes(i))
    {
      return;
    }
    if (newArray.length === 2) {
      newArray.splice(0, 1);
    }
    newArray.push(i);
    setpressed(newArray);
  };
  useEffect(()=>{
    console.log(pressed);
  },[pressed])
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div
            onClick={() => {
              pushLogic(0);
            }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(0)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(1);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(1)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(2);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(2)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(3);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(3)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
        </div>
        <div>
          <div
          onClick={() => {
            pushLogic(4);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(4)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(5);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(5)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(6);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(6)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(7);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(7)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
        </div>
        <div>
          <div
          onClick={() => {
            pushLogic(8);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(8)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(9);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(9)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(10);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(10)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(11);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(11)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
        </div>
        <div>
          <div
          onClick={() => {
            pushLogic(12);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(12)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(13);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(13)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(14);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(14)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
          <div
          onClick={() => {
            pushLogic(15);
          }}
            style={{
              height: "100px",
              width: "200px",
              background: pressed.includes(15)?"red":"blue",
              display: "inline-block",
              margin: "3px",
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;