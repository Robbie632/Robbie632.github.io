import { useState } from 'react'
import './App.css'

function App() {
  // create state for items list
    // should include value, whether strked through or not

  const orderedListStyle={
    background: "#f0f4fa",
    borderRadius: "0.7em",
    padding: "1em 1.5em",
    marginBottom: "2em"
  }
  const listStyle = {
    color: "black"
  }

  const inputTextStyle = {
        padding: "0.6em 1em",
    border: "1.5px solid var(--primary)",
    borderRadius: "0.5em",
    fontSize: "1em",
    outline: "none",
    width: "65%",
    transition: "border 0.2s",
    marginRight: "0.5em"
  }

  const containerStyle = {
    background: "var(--card)",
    marginTop: "3em",
    padding: "2.5em 2em 2em 2em",
    borderRadius: "1.2em",
    boxShadow: "0 6px 32px rgba(79, 140, 255, 0.08), 0 1.5px 6px rgba(0, 0, 0, 0.04)",
    maxWidth: "400px",
    width: "100",
    display: "flex",
    flexDirection: "column",
    alignItems: "left"

  }

  const h2Styles = {
    fontSize: "1.5em",
    fontWeight: "bold",
    unicodeBidi: "isolate",
    color: "var(--primary)",
    margin: "0 0 0.5em 0",
  }

  return (
    <>
      <div style={containerStyle}>
        <h1>Simple To-Do List</h1>
        <h2 style={h2Styles}>Instructions</h2>
        <ol style={orderedListStyle}>
          <li style={listStyle}>add item</li>
          <li style={listStyle}>delete item</li>
          <li style={listStyle}>strike through item</li>
        </ol>

        <input
          style={inputTextStyle}
          id="todo"
          type="text"
          placeholder="enter a new todo"
        />
      </div>
    </>
  );
}

export default App
