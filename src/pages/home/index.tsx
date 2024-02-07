import { useEffect } from "react";
import { contentApi } from "../../common/api";
import axios from "axios";
const postData = async () => {
  try {
    const response = await axios.post('/api/register/registerEvent', {
      email: 'albin@gmail.com',
      eventName: 'Quiz',
      paymentMode: 'Offline',
      paid: false,
    });

    console.log('Response:', response.data);
  } catch (error: any) {
    console.error('Error:', error.message);
  }
};
const Home = () =>{
    useEffect(()=>{
        postData()
    }, [])
    return (
        <div>
            <h1>
                Home Page
            </h1>
        </div>
    )
}

export default Home;