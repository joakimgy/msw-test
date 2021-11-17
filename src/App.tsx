import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useSWR from "swr";

function fetcher(url: string) {
  return fetch(url).then((d) => d.json());
}

function App() {
  const { data } = useSWR("/my-api", fetcher);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      {data ? <p>Response: {data.message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
