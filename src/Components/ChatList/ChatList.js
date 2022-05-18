import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef"
import ky from "ky"
import { useEffect, useState } from "react"
import ExistingChat from "../ExistingChat/ExistingChat"
export default function ChatList({focus, authUser}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        (async function fetchData() {
            const accessToken = localStorage.getItem('access_token');


            const userData = await ky.get(`${process.env.REACT_APP_API_URL}/users`,{
                headers:{
                    Authorization: `Bearer ${accessToken}`,
                }}).json()

            setUsers(userData)
        }
         )()
    },[])


   return(
        <div className="flex  flex-wrap justify-center w-2/5 bg-white border-r h-full border-b overflow-y-auto pb-10" >
            {
                users.map((user, index) => {
                    if(user.id !== authUser.id){
                        return <ExistingChat user={user} focus={focus} key={user.id + index}/>
                    }
                })
            }
        </div>

   ) 
}

