import { useState } from "react";
import Timer from "../components/Timer";
import Tips from "../components/Tips";

export default function ExercisePage() {
  //startscore
  const [score, setScore] = useState(100);

  //eerste opdracht dat zichtbaar is
  const [currentTask, setCurrentTask] = useState(0); 

  const tasks = [
    {
      title: "1. Vind de verborgen WiFi-netwerken",
      description: "Gebruik het volgende commando in de terminal:",
      command: "sudo iwlist wlan0 scan | grep -E 'SSID|Signal'",
      buttonText: "Gelukt!",
      tip: "Gebruik 'iwlist wlan0 scan' om alle netwerken te zien.",
    },
    {
      title: "2. Maak verbinding met het verborgen WiFi-netwerk (DHCP)",
      description: "Gebruik de gevonden SSID en verbind handmatig met het WiFi-netwerk via de netwerkinstellingen van Ubuntu. Zorg ervoor dat DHCP is ingeschakeld, zodat je automatisch een IP-adres krijgt toegewezen.",
      buttonText: "Gelukt!",
      tip: "vul tip in",
    },
    {
      title: "3. Download en installeer SuperTuxKart",
      description: "Hiervoor start je de terminal op",
      description: "Op de computer zit een sticker met het apparaat-ID, en de switch heeft een label met de netwerknaam. Gebruik deze informatie om de juiste instellingen in te vullen.",
      buttonText: "Gelukt!",
      tip: "vul tip in",
    },
    {
      title: "4. Verbreek je WiFi-verbinding en sluit de computer aan op de switch",
      description: "Gebruik een netwerkkabel om je computer te verbinden met de switch op tafel. Zorg ervoor dat je WiFi-verbinding is uitgeschakeld.",
      description: "Op de computer zit een sticker met het apparaat-ID, en de switch heeft een label met de netwerknaam. Gebruik deze informatie om de juiste instellingen in te vullen.",
      buttonText: "Gelukt!",
      tip: "vul tip in",
    },
    {
      title: "5. Wat is een IP-adres en hoe werkt een subnetmask?",
      description: "Een IP-adres is een uniek nummer dat een apparaat in een netwerk identificeert. Dit adres bestaat uit vier nummers gescheiden door punten (bijv. 192.168.1.10).",
      description: "Het subnetmask bepaalt welke IP-adressen tot hetzelfde netwerk behoren. Een veelvoorkomend subnetmask is 255.255.255.0, wat betekent dat alle apparaten met een adres dat begint met 192.168.1.x binnen hetzelfde netwerk zitten.",
      buttonText: "Gelukt!",
      tip: "vul tip in",
    },
    {
      title: "6. Configureer een statisch IP-adres",
      description: "Omdat je nu verbonden bent met de switch, moet je een statisch IP-adres instellen.",
        command: `Ga naar Netwerkinstellingen → Bedrade verbinding 
→ Handmatig configureren.

IP-adres: 192.168.1.X 
(kies een uniek nummer voor X, bijvoorbeeld 10)
Subnetmasker: 255.255.255.0
Gateway: 192.168.1.1`,
      buttonText: "Gelukt!",
      tip: "vul tip in",
      },
      {
        title: "7. Test je verbinding",
        description: "Open een terminal en test je verbinding met het volgende commando:",
        command: 'ping -c 4 192.168.1.1',
        description: "Als je antwoord krijgt, is de verbinding succesvol.",
        buttonText: "Gelukt!",
        tip: "vul tip in",
      },
      {
        title: "8. Start SuperTuxKart in de multiplayer-modus",
        description: "Start SuperTuxKart en ga naar multiplayer-instellingen.",
        description: "De eerste speler moet een lokaal netwerkspel hosten. De andere spelers kunnen zich aansluiten met het IP-adres van de host.",
        buttonText: "Gelukt!",
        tip: "vul tip in",
      },
      {
      title: "9. Race tegen je klasgenoten!",
      description: "Als alles goed is ingesteld, kunnen jullie nu tegen elkaar racen. Veel succes!"
      }
      
  ];

  const unlockNextTask = () => {
    if (currentTask < tasks.length - 1) {
      setCurrentTask(currentTask + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-center mb-4">
          Netwerk & Cybersecurity Opdracht
        </h2>
        <p className="text-center mb-6">
          **Huidige score: {score} punten** 🔥
        </p>

        {/* Opdrachten weergeven */}
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`p-4 border rounded-lg mt-4 bg-gray-200 ${
              index > currentTask ? "hidden" : ""
            }`}
          >
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p>{task.description}</p>
            {task.command && (
              <pre className="bg-gray-900 text-white p-2 rounded-md mt-2">
                {task.command}
              </pre>
            )}

            {/* "Gelukt" knop - alleen tonen bij de huidige opdracht */}
            {index === currentTask && (
              <button
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
                onClick={unlockNextTask}
              >
                {task.buttonText}
              </button>
            )}

            {/* Tips component */}
            <Tips taskIndex={index} taskTip={task.tip} score={score} setScore={setScore} />
          </div>
        ))}
      </div>

      {/* Timer onderaan */}
      <Timer showTips={false} />
    </div>
  );
}
