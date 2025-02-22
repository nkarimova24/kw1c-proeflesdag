import { useState, useEffect } from "react";

export default function Timer({ showTips }) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [tips, setTips] = useState({ tip1: false, tip2: false, tip3: false });

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    let tipTimers = [];

    if (showTips) {
      tipTimers = [
        setTimeout(() => {
          setTips((prev) => ({ ...prev, tip1: true }));
          console.log("💡 Tip: 'admin' is een standaard inlognaam.");
        }, 2 * 60 * 1000),
        setTimeout(() => {
          setTips((prev) => ({ ...prev, tip2: true }));
          console.log("💡 Tip: Gebruik F12 om de ontwikkelaarstools te openen.");
        }, 4 * 60 * 1000),
        setTimeout(() => {
          setTips((prev) => ({ ...prev, tip3: true }));
          console.log("💡 Tip: Bekijk de broncode van de pagina om te zien hoe je kunt inloggen.");
        }, 6 * 60 * 1000),
      ];
    }

    return () => {
      clearInterval(interval);
      tipTimers.forEach(clearTimeout);
    };
  }, [showTips]);

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  return (
    <div className="fixed top-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <p className="text-lg font-bold">Tijd verstreken: {minutes} min {seconds} sec</p>

      {showTips && (
        <div className="mt-2 space-y-2">
          {tips.tip1 && <div className="p-2 bg-yellow-300 rounded">💡 Tip: 'admin' is een standaard inlognaam.</div>}
          {tips.tip2 && <div className="p-2 bg-yellow-300 rounded">💡 Tip: Gebruik F12 om de ontwikkelaarstools te openen.</div>}
          {tips.tip3 && <div className="p-2 bg-yellow-300 rounded">💡 Tip: Bekijk de broncode van de pagina om te zien hoe je kunt inloggen.</div>}
        </div>
      )}
    </div>
  );
}
