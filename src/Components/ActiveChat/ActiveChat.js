import { useEffect, useState, useRef } from "react"
import ky  from "ky"
import { Box, Spacer } from "@chakra-ui/react"
import ChatInput from "../ChatInput/ChatInput"
import ReceivedChat from "../ReceivedChat/ ReceivedChat"
import SentChat from "../SentChat/SentChat"
import Echo from 'laravel-echo'
import Header from "../Header/Header"

window.Pusher = require('pusher-js')
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '1939b3f6b5329e8252e4',
    cluster: 'mt1',
    forceTLS: true
});



export default function ActiveChat({senderUser, focusedUser}){

    const [chatData, setChatData] = useState([])
    const messagesEndRef = useRef(null);
    const [chats, setChats] = useState([])



    useEffect(()=>{
        const channel = window.Echo.channel('chatApp')
        const eventName = `.chat-${[senderUser.id, focusedUser.id].sort().join('-')}`
        
        channel.listen(eventName, (e) => {
            console.log('chat', e.message)
            setChatData(chatData => [...chatData, e.message])
        });

        return () => {
            channel.stopListening(eventName)
            window.Echo.leaveChannel('chatApp')
        }
    }, [chatData])

    

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(scrollToBottom, [focusedUser]);


    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        (async function fetchData() {
            const chatData = await ky.get(`${process.env.REACT_APP_API_URL}/chats/contact/${focusedUser.id}`,{
                headers:{
                    Authorization: `Bearer ${accessToken}`,
                }}).json()
            setChatData(chatData.data)
            console.log('chatData', chatData.data)
         }
         )()
    },[focusedUser])

    function renderChats(){

        return( 
            chatData.map((chat, index) => {
            if(chat.sender_id === senderUser.id){
                return (
                    console.log(chat.message),
                    <SentChat 
                    senderUser={senderUser.name}
                    message={chat.message}
                    index={chat.id + index}
                    />
                )
            }
            else{
                return(
                    console.log(chat.message),
                    <ReceivedChat 
                    receiverUser={focusedUser.name}
                    message={chat.message}
                    index={chat.id + index}
                    />
                ) 
            }
        })
        )
    }

    





  
    return (
        <div className="flex flex-wrap items-center w-3/5 bg-bgColor h-full border-b relative  pb-20 overflow-y-scroll ">
            {focusedUser &&
                <>
                    {renderChats()}
                    <ChatInput senderUser={senderUser} receiverUser={focusedUser}/>
                     <div ref={messagesEndRef}></div>

                </>

            }

        </div>

    )
}

