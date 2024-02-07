import { useEffect } from "react";
import { contentApi } from "../../common/api";
import axios from "axios";
import Header from "../../components/header";
const postData = async () => {
    try {
        const response = await axios.post('/api/register/registerEvent', {
            email: 'albin@gmail.com',
            eventName: 'Trader Hunt',
            paymentMode: 'Offline',
            paid: false,
        });
        console.log('Response:', response.data);
    } catch (error: any) {
        console.error('Error:', error.message);
    }
};



const Home = () => {
    useEffect(() => {
        postData()
    }, [])
    return (
        <div
            className="fixed inset-0 grid text-white"
            style={{ gridTemplateRows: "auto 1fr auto" }}
        >
            < Header />
            <div className="w-[100vw] h-[100vh]" style={{background: "/images/backGround.svg"}}>

            </div>
        </div>
    )
}

export default Home;