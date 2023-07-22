import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form } from "./components/Form";
import { Home } from "./pages/Home";
function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      {!user.length > 0 ? <Form setUser={setUser} /> : <Home user={user}  />}
    </div>
  );
}

export default App;
