export default function Attempts({ attempts }) {
    return (
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-80 max-h-60 overflow-auto">
        <h3 className="text-lg font-bold mb-2">Inlogpogingen</h3>
        <ul className="text-sm">
          {attempts.length === 0 ? (
            <li className="text-gray-400">Nog geen pogingen</li>
          ) : (
            attempts.map((attempt, index) => (
              <li key={index} className="border-b border-gray-600 py-1">
                <span className="font-bold">{attempt.username}</span>: {attempt.password}
              </li>
            ))
          )}
        </ul>
      </div>
    );
  }
  