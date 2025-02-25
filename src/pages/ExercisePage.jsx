import { useState } from "react";
import Timer from "../components/Timer";
import Tips from "../components/Tips";
import Score from "../components/Score";

{/* ExercisePage met components als Timer, Tips en Score*/}

export default function ExercisePage() {
  const [score, setScore] = useState(100); //startscore, valt aan te passen
  const [currentTask, setCurrentTask] = useState(0);

  {/* Array met opdrachten, je kunt een opdrachten aanpassen of een toevoegen
    Tips kun je zelf invullen*/}
  const tasks = [
    {
      title: "1. Vind de verborgen WiFi-netwerken",
      description: `Je eerste taak is om te ontdekken welke verborgen WiFi-netwerken beschikbaar zijn.\n
Gebruik het volgende commando in de terminal:`,
//ik wist eerlijk gezegd niet zeker of de command hier een tip was of niet, zo wel, kunnen we dit veranderen naar een tip :)
      command: "sudo iwlist wlan0 scan | grep -E 'SSID|Signal'",
      buttonText: "Voltooid",
      tips: ["vul tip in", "vul tip in"],
    },
    {
      title: "2. Verbind met het verborgen WiFi-netwerk (DHCP)",
      description: `Gebruik de gevonden SSID en verbind handmatig via de netwerkinstellingen van Ubuntu.\n
      Zorg ervoor dat DHCP is ingeschakeld, zodat je automatisch een IP-adres krijgt toegewezen.`,
      buttonText: "Voltooid",
      tips: ["vul tip in", "vul tip in"],
    },
    {
      title: "3. Download en installeer SuperTuxKart",
      description: `Hiervoor start je de terminal op.\n
      Op de computer zit een sticker met het apparaat-ID, en de switch heeft een label met de netwerknaam.\n
      Gebruik deze informatie om de juiste instellingen in te vullen.`,
      buttonText: "Voltooid",
      tips: ["vul tip in", "vul tip in"],
    },
    {
      title: "4. Verbreek je WiFi-verbinding en sluit de computer aan op de switch",
      description: `Gebruik een netwerkkabel om je computer te verbinden met de switch op tafel.\n
      Zorg ervoor dat je WiFi-verbinding is uitgeschakeld.\n
      Op de computer zit een sticker met het apparaat-ID, en de switch heeft een label met de netwerknaam.\n
      Gebruik deze informatie om de juiste instellingen in te vullen.`,
      buttonText: "Voltooid",
      tips: ["vul tip in", "vul tip in"],
    },
    {
      title: "5. Wat is een IP-adres en hoe werkt een subnetmask?",
      description: `Een IP-adres is een uniek nummer dat een apparaat in een netwerk identificeert.\n
Dit adres bestaat uit vier nummers gescheiden door punten (bijv. 192.168.1.10).\n\n
Het subnetmask bepaalt welke IP-adressen tot hetzelfde netwerk behoren.`,
      buttonText: "Voltooid",
      tips: ["vul tip in", "vul tip in"],
    },
    {
      title: "6. Configureer een statisch IP-adres",
      description: "Omdat je nu verbonden bent met de switch, moet je een statisch IP-adres instellen.",
      command: `Ga naar Netwerkinstellingen → Bedrade verbinding → Handmatig configureren.\n
IP-adres: 192.168.1.X (kies een uniek nummer voor X, bijvoorbeeld 10)\n
Subnetmasker: 255.255.255.0\n
Gateway: 192.168.1.1`,
      buttonText: "Voltooid",
      tips: ["vul tip in", "vul tip in"],
    },
    {
      title: "7. Test je verbinding",
      description: `Open een terminal en test je verbinding met het volgende commando:\n
Als je antwoord krijgt, is de verbinding succesvol.`,
      command: "ping -c 4 192.168.1.1",
      buttonText: "Voltooid",
      tips: ["vul tip in", "vul tip in"],
    },
    {
      title: "8. Start SuperTuxKart in de multiplayer-modus",
      description: `Start SuperTuxKart en ga naar multiplayer-instellingen.\n
      De eerste speler moet een lokaal netwerkspel hosten.\n
      De andere spelers kunnen zich aansluiten met het IP-adres van de host.`,
      buttonText: "Voltooid",
      tips: ["vul tip in", "vul tip in"],
    },
    {
      title: "9. Race tegen je klasgenoten!",
      description: "Als alles goed is ingesteld, kunnen jullie nu tegen elkaar racen. Veel succes! 🏎️",
    },
  ];

  {/*Functie voor het ontgrendelen van de volgende taak, scrollt ook door naar volgende taak*/}
  
  const unlockNextTask = () => {
    if (currentTask < tasks.length - 1) {
      setCurrentTask((prevTask) => {
        const nextTask = prevTask + 1;
        setTimeout(() => {
          document.getElementById(`task-${nextTask}`)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return nextTask;
      });
    }
  };

  
  return (
    <div className="flex flex-col items-center min-h-screen bg-blue-950">
      <div className="w-full max-w-2xl mt-6 px-4">
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${((currentTask + 1) / tasks.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl w-full mt-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Netwerk & Cybersecurity Opdracht</h2>
        {/*Score component*/} 
        <Score score={score} />

        {tasks.map((task, index) => (
          <div key={index} id={`task-${index}`} className={`p-6 border border-gray-300 rounded-lg mt-4 bg-gray-100 hover:scale-105 hover:shadow-md transition-all duration-300 ${index > currentTask ? "hidden" : ""}`}>
            <h3 className="text-xl font-bold text-gray-800">{task.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{task.description}</p>
            
            {task.command && (
              <pre className="bg-gray-900 text-white p-3 rounded-md mt-2 text-sm font-mono">
                {task.command}
              </pre>
            )}

            {index === currentTask && (
              <div className='flex justify-between mt-4'>
                <button className="mt-12 px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition-all duration-300" onClick={unlockNextTask}>
                  {task.buttonText}
                </button>
                {/*Tips component*/}
                <Tips taskIndex={index} tips={task.tips} score={score} setScore={setScore} />
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Timer componen, showTips dat voor LoginPage gebruikt wordt staat nu uit*/}
      <Timer showTips={false} />
    </div>
  );
}
