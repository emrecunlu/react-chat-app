import {useContext, createContext, useState, useEffect} from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import {db} from "../firabase";

const SiteContext = createContext()

function SiteProvider ({ children }) {

    const [user, setUser] = useState(sessionStorage.getItem('user') ? sessionStorage.getItem('user') : false)
    const [messages, setMessages] = useState([])

    useEffect(() => {

        const messageRef = query((collection(db, 'messages')), orderBy('createdAt', 'asc'))

        const unsubscribe = onSnapshot(messageRef, snapshot => {
            const messages = snapshot.docs.map(message => (
                {
                    messageId: message.id,
                    ...message.data()
                }
            ))

            setMessages(messages)
        })

        return () => unsubscribe()
    }, [])

    const data = {
        user,
        setUser,
        messages,
        setMessages
    }

    return (
        <SiteContext.Provider value={data}>
            {children}
        </SiteContext.Provider>
    )
}

export const useSite = () => useContext(SiteContext)

export default SiteProvider