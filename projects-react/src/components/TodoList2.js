
// ----------------------------------------
// es 2
// Meno semplice: scrivere un componente che rappresenti 
// una TODO list prendendo gli elementi della lista da 
// questo endpoint:
// https://jsonplaceholder.typicode.com/todos
// Ogni componente deve avere una checkbox, se la
// checkbox viene flaggata il componente finisce in
// fondo alla lista e diventa piu' opaco
// implementazione in piu:
// VOGLIO VISUALIZZARE SOLO 5 TASK E PERMETTERE ALL UTENTE DI 
// AGGIUNGERNE UNO PER VOLTA

import { useEffect, useState } from 'react'

function Elements({ objList }) {
    const [classe,setClasse]=useState('') //la classe che poi deve diventare .done
    const [obj,setObj]=useState(...objList) //un array di booleani che corrispondono al booleano dell ob con lo stesso indice
    //devo caricare checks al primo render del componente
    useEffect(()=>{
       
    },[])

    console.log(objList[0])
    function done(i,val){
        // setClasse(!val)
    }
    
    return (
        <>
            {objList.map((ob,i)=> {
                return(<li
                    key={i}
                    className={ob.completed?'done':''} //FIXME perchè quando fa onchange li cambia tutti!!!
                    >
                        <input 
                        type='checkbox'
                        checked={ob.completed}
                        onChange={()=>done(i,ob.completed)} 
                        />
                        <span>
                        {ob.id} - {ob.completed?' fatto ':' da fare '}
                        </span>
                    </li>)
                
            })}
        </>
    )
}


export default function Todo() {
    let [taskNumber, setTaskNumber] = useState(5) //il numero di task da visualizzare 
    let [objs, setObjs] = useState([])  // l array con tutti i dati recuperati dall API
    let [tasks, setTasks] = useState([])  // l array di task gestiti attualmente
    
    useEffect(() => {
    // uso una funzione asincrona e mi ricavo i json dall API
        async function fetchList() {
            let res = await fetch('https://jsonplaceholder.typicode.com/todos')
            let json = await res.json()
            // setObjs(json.slice(0,5))  // per prendere solo i primi 5 E BASTA 
            setObjs(json)   
        }
        fetchList()
    }, [])
    
    useEffect(()=>{
    //per COMINCIARE A caricare i primi 5 task di default
        let newTasks = [...objs]
        setTasks(newTasks.splice(0,taskNumber))
    },[objs])


    function moreTasks() {
    //per caricare i seguenti ad ogni click
        setTaskNumber(taskNumber+1)
    }
    
    useEffect(()=>{    
        let newTasks = [...objs]
        setTasks(newTasks.splice(0, taskNumber))
    },[taskNumber]) //questo use effect partirà quando noterà un cambiamento allo state di taskNumber

    return (
        <div className='lista'>
            <h1>ToDo list</h1>
            <ul>
                <Elements objList={tasks} />
            </ul>
            <button onClick={moreTasks}>click HERE to get more task</button>
        </div>
    )
}



// ----------------------------------------
// es 3
// todo list (lezione)

// ----------------------------------------
// es 4
// tic tac toe ( vedi documentazione,fermarsi a adding travel?)

// ----------------------------------------
// es 5
// ping pong

// ----------------------------------------
// ruota
// Secondo esercizio: Scrivere una applicazione che
// si avvicini piu' possibile al concetto di "ruota della fortuna",
// quindi deve esserci una "ruota" (che puo' anche non avere
// l'aspetto di una ruota, basta che si vedano diversi valori
// selezionati di volta in volta... per arrivare ad uno solo finale),
//  e deve esserci uno storico dei valori usciti.


