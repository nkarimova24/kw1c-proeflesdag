import { useNavigate } from "react-router-dom";

const MaterialPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="card">
        <h2>Welkom bij de oefening!</h2>
        <p>
          Hier zijn de regels en functionaliteiten:
        </p>
        <ul>
          <li>Je hebt beperkte tijd om de uitdaging te voltooien.</li>
          <li>Gebruik je technische kennis om toegang te krijgen.</li>
          <li>Gebruik F12 om ontwikkelaarstools te openen.</li>
        </ul>
        <p>
          Klik op de knop hieronder om te beginnen met de oefening.
        </p>
        <button onClick={() => navigate("/exercise")}>Begrepen</button>
      </div>
    </div>
  );
};

export default MaterialPage;