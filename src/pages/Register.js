import {BsArrowReturnRight} from "react-icons/bs";
import {useState} from "react";
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer, toast} from "react-toastify";
import {useNavigate} from 'react-router-dom'
import {useSite} from "../context/SiteContext";
import {makeid} from "../utils";

function Register () {

    const [name, setName] = useState('')

    const { setUser } = useSite()

    const navigate = useNavigate()

    const submitHandle = e => {
        e.preventDefault()

        if (name.length < 3) {
            toast.error('Kullanıcı adınız 3 karekterden daha az olamaz.')

            setName('')
        } else {
            sessionStorage.setItem('user', JSON.stringify({
                userId: makeid(20),
                userName: name
            }))
            setUser(JSON.stringify({
                userId: makeid(20),
                userName: name
            }))

            navigate('/', { replace: true })
        }
    }

    return (
        <>
            <div className="h-screen min-h-screen w-full flex items-center justify-center bg-gray-900 p-5">
                <div className="w-full max-w-xl mx-auto">
                    <form method="post" onSubmit={submitHandle} className="flex items-center">
                        <input type="text" className="w-full h-14 outline-none px-5" placeholder="İsminizi giriniz." value={name} onChange={e => setName(e.target.value)} />
                        <button className="h-14 w-14 flex items-center justify-center bg-white" type="submit">
                            <BsArrowReturnRight size={18} />
                        </button>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default Register