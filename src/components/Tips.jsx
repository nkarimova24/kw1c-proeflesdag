import { useState } from "react";

export default function Tips({ taskIndex, taskTip, score, setScore }) {
  const [bought, setBought] = useState(false);

  // Functie om een tip te kopen
  const buyTip = () => {
    if (!bought && score >= 10) {
      setBought(true);
      setScore(score - 10);
    }
  };

  return (
    <div>
      {/* Tip kopen knop (alleen als nog niet gekocht) */}
      {!bought && (
        <button
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-lg text-sm"
          onClick={buyTip}
        >
          Koop Tip (-10 punten)
        </button>
      )}

      {/* Tip tonen als gekocht */}
      {bought && (
        <p className="mt-2 text-sm text-yellow-600">💡 Tip: {taskTip}</p>
      )}
    </div>
  );
}
