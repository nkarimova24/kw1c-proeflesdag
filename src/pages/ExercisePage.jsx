import Timer from "../components/Timer";

export default function ExercisePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-center mb-4">
          Netwerk & Cybersecurity Opdracht
        </h2>
        <p className="text-center mb-6">
          Gefeliciteerd! Je hebt succesvol ingelogd. Volg de stappen hieronder om de uitdagingen te voltooien.
        </p>
        
        <div className="p-4 border rounded-lg mt-4 bg-gray-200">
          <h3 className="text-lg font-bold">1. Vind de verborgen WiFi-netwerken</h3>
          <p>Gebruik het volgende commando in de terminal:</p>
          <pre className="bg-gray-900 text-white p-2 rounded-md mt-2">
            sudo iwlist wlan0 scan | grep -E 'SSID|Signal'
          </pre>
        </div>
      </div>

      <Timer />
    </div>
  );
}
