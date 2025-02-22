import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";
import Attempts from "../components/Attempts";

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
      navigate("/opdracht");
    } else {
      setError("Onjuiste inloggegevens");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `console.log("🚀 Geheime login: admin / supergeheim123")`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-700 to-blue-500 relative">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Welkom, log in</h2>
        <form onSubmit={checkLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Gebruikersnaam</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Wachtwoord</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white p-2 rounded-lg hover:bg-blue-500 transition"
          >
            Inloggen
          </button>
        </form>
        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
      </div>

      <Timer showTips={true} />
      <Attempts attempts={passwordAttempts} />
    </div>
  );
}
