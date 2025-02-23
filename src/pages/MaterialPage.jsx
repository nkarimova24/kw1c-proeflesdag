import { useNavigate } from "react-router-dom";

export default function MaterialPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-950">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl w-full mt-6 text-gray-800">
        <h2 className="text-3xl font-extrabold text-center mb-4">Welkom bij de oefening!</h2>
        <p className="text-lg mb-4">Hier zijn de regels en functionaliteiten:</p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Regel / Functionaliteit</li>
          <li>Regel / Functionaliteit</li>
          <li>Regel / Functionaliteit</li>
        </ul>
        <p className="text-lg mb-4">Klik op de knop hieronder om te beginnen met de oefening.</p>
        <button className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition-all duration-300" onClick={() => navigate("/exercise")}>
          Begrepen
        </button>
      </div>
    </div>
  );
}
