import { useState, useEffect } from "react";

{/* Tips component voor ExercisePage */}

export default function Tips({ tips, score, setScore }) {
  const [availableTips, setAvailableTips] = useState([]); 
  const [boughtTips, setBoughtTips] = useState([]); 
  const tipPrices = [10, 15];

  useEffect(() => {
    if (!tips || tips.length === 0) return; 

    //timers om tips beschikbaar te maken, 1e na 2 minuten, 2e na 4 minuten
    const timers = tips.map((_, index) =>
      setTimeout(() => {
        setAvailableTips((prev) => [...prev, index]);
      }, (index + 1) * 2 * 60 * 1000)
    );

    return () => timers.forEach(clearTimeout);
  }, [tips]);

  //functie op een tip te kopen als user genoeg scorepunten heeft.
  const buyTip = (index) => {
    if (score >= tipPrices[index] && !boughtTips.includes(index)) {
      setBoughtTips((prev) => [...prev, index]);
      setScore((prev) => prev - tipPrices[index]);
    }
  };

  return (
    <div className="mt-4 flex flex-col gap-2">
      {tips.map((tip, index) => (
        <div key={index}>
          {!boughtTips.includes(index) ? (
            <button
              className={`px-4 py-2 rounded-md text-white transition ${
                availableTips.includes(index)
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={() => buyTip(index)}
              disabled={!availableTips.includes(index) || boughtTips.includes(index)}
            >
              {`Koop Tip ${index + 1} (${tipPrices[index]} punten)`}
            </button>
          ) : (
            <p className="mt-2 text-sm text-yellow-600">💡 Tip: {tip}</p>
          )}
        </div>
      ))}
    </div>
  );
}
