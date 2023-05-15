// import "./styles.css";
import { useState } from "react";
// dopo il REFACTORING con Alberto
// function MessageHistory({messages}) {
//     let noMess= (<span>no messages</span>)
//     let list=(
//         <ul>
//             { messages.map((obj)=> { 
//             return (
//                         <li className="sendedMessage">
//                             <div>{obj.user} - </div>
//                             <div>{obj.message} </div> 
//                         </li>
//                     )
//                 }) 
//             }
//         </ul>
//         )
//     return (
//         <div className="messageHistory">
//             { messages.length === 0? noMess : list }  
//       </div>
//     );
//   }

// prova che l'IF SI PUO USARE >>> NON DA PROBLEMI SE SIAMO NEL CONTESTO JS <<<
// function MessageHistory({messages}) {
//     let res=''
//     if( messages.length === 0){
//         res=(<span>no messages</span>)
//     }else{
//         res=(
//             <ul>
//                 { messages.map((obj)=> { 
//                 return (
//                             <li className="sendedMessage">
//                                 <div>{obj.user} - </div>
//                                 <div>{obj.message} </div> 
//                             </li>
//                         )
//                     }) 
//                 }
//             </ul>
//             )
//     }
//     return (
//         <div className="messageHistory">
//             {res}  
//       </div>
//     );
//   }

function MessageHistory({ messages }) {
    let list = messages.map((obj) => {
        return (
            <li className="sendedMessage">
                <div>{obj.user} - </div>
                <div>{obj.message} </div>
            </li>
        )
    })

    let res = messages.length === 0 ? (<span>no messages</span>) : (<ul>{list}</ul>)

    return (
        <div className="messageHistory">
            {res}
        </div>
    );
}

function MakeMessage({ send }) {
    let [tempMessage, setTempMessage] = useState('');
    let [tempUser, setTempUser] = useState('')

    return (
        <div className="makeMessage">
            <div className="user">
                <input value={tempUser} onChange={(e) => setTempUser(e.target.value)} type="text" placeholder="username" />
            </div>
            <div className="message">
                <input value={tempMessage} onChange={(e) => setTempMessage(e.target.value)} type="text" placeholder="message" />
            </div>
            <div className="enter">
                <button type="button" onClick={() => {
                    send(tempUser, tempMessage)
                }}>
                    ENTER
                </button>
            </div>
        </div>
    );
}

export default function App() {
    let [messages, setMessages] = useState([])

    function send(user, message) {
        let newMessagges = [...messages]
        // let obj={user,message}
        // newMessagges.push(obj)
        newMessagges.push({ user, message })
        setMessages(newMessagges)
    }

    return (
        <main className="chat">
            <MessageHistory messages={messages} />
            <MakeMessage send={send} />
        </main>
    );
}
