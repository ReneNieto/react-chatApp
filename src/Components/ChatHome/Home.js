import ky from 'ky'
import ChatList from "../ChatList/ChatList.js"
import ActiveChat from "../ActiveChat/ActiveChat.js"
import Header from "../Header/Header.js"
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'


export default function Main(){
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [focusedUser, setFocusedUser] = useState(false)
  localStorage.setItem('focusedUser', false) 
  

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    ky.get(`${process.env.REACT_APP_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .json()
      .then((resp) => {
        setUser(resp)
      })
      .catch((err) => {
        localStorage.removeItem('access_token')
        navigate('/login')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [navigate])

  if (loading) {
    return <div>Loading app..</div>
  }

  if (!user) {
    return null
  }



  return (
      <>
      <Header user={user} focusedUser={focusedUser}/>
      <main className="flex item-center justify-center  h-[calc(100vh-127px)]  border-b  overflow-hidden">
      <ChatList focus={focusToggle} authUser={user} />
      <ActiveChat senderUser={user} focusedUser={focusedUser} />
      </main>
      </>

      
  )
  function focusToggle(user){
    console.log('focus user', user)
    setFocusedUser(user)
  }
  
}