import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Dialog from "./components/settings/Dialog";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <main className="">
      <Dialog />

      <div className="w-full h-screen flex">
        <div className="hidden md:block md:w-[20%]">
          <Sidebar />
        </div>
        <div className="w-full md:w-[80%]">
          <Main />
        </div>
      </div>

      {/* <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form> */}
      {/* <p>{greetMsg}</p> */}
    </main>
  );
}

export default App;
