import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";
import Attempts from "../components/Attempts";

{/* Login pagina met compoents als Timer en Attempts erin verwerkt*/}

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordAttempts, setPasswordAttempts] = useState([]);
  const navigate = useNavigate();

  const checkLogin = (event) => {
    event.preventDefault();
    setPasswordAttempts((prev) => [...prev, { username, password }]);
    console.log(passwordAttempts);

    if (username === "admin" && password === "supergeheim123") {
      navigate("/material");
    } else {
      setError("Onjuiste inloggegevens");
    }
  };

  {/* 'Verborgen' script, het is makkelijk te vinden in F12, zouden wel moeilijker kunnen maken door een student in Network Tab te laten kijken.*/}
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `Geheime login: admin / supergeheim123`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950 relative">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Welkom, log in</h2>
        <form onSubmit={checkLogin}>
          <div className="mb-3">
            <label className="block text-gray-600">Gebruikersnaam</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-600">Wachtwoord</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Inloggen
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

    {/*Timer en Attempts components worden hier aangeroepen*/}
      <Timer showTips={true} />
      <Attempts attempts={passwordAttempts} />
    </div>
  );
}
