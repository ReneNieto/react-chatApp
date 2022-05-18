import { useEffect, useState } from 'react'
import { Input, Button, FormControl,} from '@chakra-ui/react'
import { Formik, Field, Form } from 'formik'
import ky from 'ky'
import EmojiPicker from '../EmojiPicker/EmojiPicker'




export default function ChatInput({senderUser, receiverUser}) {
    const [emojiSlider, setEmojiSlider] = useState(false)
    const [chosenEmoji, setChosenEmoji] = useState(null)
    const [messageData, setMessageData] = useState('')

    useEffect(()=>{
        if(chosenEmoji === null){
            setMessageData(messageData)
        }
        else{
            setMessageData(messageData + chosenEmoji.emoji)
        }
    },[chosenEmoji])

    return (
        
            <Formik
                initialValues = {{
                    sender_id: '',
                    receiver_id: '',
                    message: '',
                }}
                onSubmit={handleSubmit}
            >
             {() => (
                 
                    <Form className='fixed bottom-5 w-3/5  '>
                        <div className=' flex w-11/12 h-20 rounded-full border  justify-between justify-self-end items-center bg-white absolute bottom-0 right-9   '>
                            <FormControl>
                                <Button 
                                colorScheme='teal' 
                                variant='ghost'
                                width='80px'
                                height='80px'
                                position='absolute'
                                left='0'
                                zIndex='10'
                                borderTopLeftRadius='50%'
                                borderBottomLeftRadius='50%'
                                
                                onClick={() => {
                                    setEmojiSlider(!emojiSlider)
                                }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.6667 14.6667C21.7712 14.6667 22.6667 13.7713 22.6667 12.6667C22.6667 11.5621 21.7712 10.6667 20.6667 10.6667C19.5621 10.6667 18.6667 11.5621 18.6667 12.6667C18.6667 13.7713 19.5621 14.6667 20.6667 14.6667Z" fill="#ADADAD"/>
                                        <path d="M11.3333 14.6667C12.4379 14.6667 13.3333 13.7713 13.3333 12.6667C13.3333 11.5621 12.4379 10.6667 11.3333 10.6667C10.2288 10.6667 9.33333 11.5621 9.33333 12.6667C9.33333 13.7713 10.2288 14.6667 11.3333 14.6667Z" fill="#ADADAD"/>
                                        <path d="M15.9867 2.66669C8.62667 2.66669 2.66667 8.64002 2.66667 16C2.66667 23.36 8.62667 29.3334 15.9867 29.3334C23.36 29.3334 29.3333 23.36 29.3333 16C29.3333 8.64002 23.36 2.66669 15.9867 2.66669ZM16 26.6667C10.1067 26.6667 5.33333 21.8934 5.33333 16C5.33333 10.1067 10.1067 5.33335 16 5.33335C21.8933 5.33335 26.6667 10.1067 26.6667 16C26.6667 21.8934 21.8933 26.6667 16 26.6667ZM21.88 18.52C21.4133 18.2267 20.7867 18.3734 20.5067 18.84C19.52 20.4 17.84 21.3334 16 21.3334C14.16 21.3334 12.48 20.4 11.4933 18.8267C11.2 18.36 10.5867 18.2134 10.12 18.5067C9.65333 18.8 9.50667 19.4134 9.8 19.88C11.16 22.0534 13.4667 23.3334 16 23.3334C18.5333 23.3334 20.84 22.04 22.2 19.8934C22.4933 19.4267 22.3467 18.8134 21.88 18.52Z" fill="#ADADAD"/>
                                    </svg>
                                </Button>
                                {emojiSlider &&
                                    <EmojiPicker chosenEmoji={chosenEmoji} setChosenEmoji={setChosenEmoji}/>
                                }
                                <Field
                                as = {Input}
                                placeholder='Type your message here...'
                                width='100%'
                                height='80px'
                                className='font-poppins text-base'
                                borderRadius='9999px'
                                paddingInline='100px'
                                name='message'
                                autoComplete='off'
                                value={messageData}
                                onChange={(e) => {
                                    setMessageData(e.target.value)
                                }}
                                />

                                <Button 
                                type='submit'
                                colorScheme='blue'
                                border='none'
                                borderRadius='50%'
                                height='64px'
                                width='64px'
                                padding='22px'
                                marginRight='12px'
                                position='absolute'
                                right='0' 
                                bottom='8px'
                                zIndex='10'                   
                                >
                                    <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.4354 2.58198C20.9352 2.0686 20.1949 1.87734 19.5046 2.07866L3.408 6.75952C2.6797 6.96186 2.16349 7.54269 2.02443 8.28055C1.88237 9.0315 2.37858 9.98479 3.02684 10.3834L8.0599 13.4768C8.57611 13.7939 9.24238 13.7144 9.66956 13.2835L15.4329 7.4843C15.723 7.18231 16.2032 7.18231 16.4934 7.4843C16.7835 7.77623 16.7835 8.24935 16.4934 8.55134L10.72 14.3516C10.2918 14.7814 10.2118 15.4508 10.5269 15.9702L13.6022 21.0538C13.9623 21.6577 14.5826 22 15.2628 22C15.3429 22 15.4329 22 15.513 21.9899C16.2933 21.8893 16.9135 21.3558 17.1436 20.6008L21.9156 4.52479C22.1257 3.84028 21.9356 3.09537 21.4354 2.58198Z" fill="white"/>
                                    </svg>
                                </Button>
                            </FormControl>
                        </div>
                    </Form>

             )}

        </Formik>
            
    ) 
    async function handleSubmit(values, formikBag) {
        const accessToken = localStorage.getItem('access_token');
        values.message = messageData
        const resp = await ky.post(`${process.env.REACT_APP_API_URL}/chats`,  {
            json: {...values, sender_id:senderUser.id, receiver_id:receiverUser.id},
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
            throwHttpErrors: false,
          })
          .json()
      }
}

