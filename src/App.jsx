import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
    const [view, setView] = useState("home");

    return (
        <>
            <Navbar setView={setView} />
            {view === "home" && <Home />}
            {view === "login" && <Login />}
        </>
    );
}

export default App;
