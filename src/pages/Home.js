import {useState, useRef, useEffect} from "react";
import {useSite} from "../context/SiteContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import classNames from "classnames";
import {db} from "../firabase";

function Home () {

    const [message, setMessage] = useState('')

    const { messages, user } = useSite()

    const chat = useRef()

    useEffect(() => {
        chat.current.scrollTop = chat.current.scrollHeight
    }, [messages])

    const submitHandle = async (e) => {
        e.preventDefault()

        const messageRef = collection(db, 'messages')

        await addDoc(messageRef, {
            message: message,
            userId: JSON.parse(user).userId,
            userName: JSON.parse(user).userName,
            createdAt: new serverTimestamp()
        })

        setMessage('')
    }

    return (
        <>
            <div className="h-screen min-h-screen w-full flex items-center justify-center bg-gray-200 p-5">
                <div ref={chat} className="chat-div w-full max-h-[500px] overflow-y-auto max-w-2xl mx-auto bg-white p-5 rounded">
                    <div className="chat-header border-b pb-5 border-b-gray-300">
                        <h1 className="font-semibold text-xl">Chat</h1>
                    </div>
                    <div className="chats flex flex-col gap-y-5 mt-5">
                        {messages.map(message => (
                            <div key={message.messageId} className={classNames({
                                'message bg-blue-300 max-w-[300px] rounded p-5': true,
                                'ml-auto bg-green-300': message.userId === JSON.parse(user).userId
                            })}>
                                <div className="user-title">
                                    <span className="font-semibold text-lg">{message.userName}</span>
                                </div>
                                <div className="user-content">
                                    <p className="font-sm text-gray-600">{message.message}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="chat-form mt-10">
                        <form method="submit" className="flex justify-between gap-x-5" onSubmit={submitHandle}>
                            <input type="text" className="w-full h-10 border border-gray-200 px-5 outline-none" placeholder="Bir mesaj yazınız." value={message} onChange={e => setMessage(e.target.value)}/>
                            <button type="submit" className="font-semibold text-sm bg-blue-600 text-white w-[200px]">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home