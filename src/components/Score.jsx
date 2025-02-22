export default function Score({ score }) {
  return (
    <p className="text-center mb-6 text-lg text-gray-600 font-semibold">
      Jouw score: <span className="text-green-600 font-bold">{score} punten</span> 🔥
    </p>
  );
}
