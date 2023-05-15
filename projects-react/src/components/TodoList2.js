
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
    const [objs, setObjs] = useState([]); //mi serve uno state per gestire il rendering della lista
  
    useEffect(() => { //uso lo useEffect per impostare i valori iniziali nello state objs
      setObjs(objList);
    }, [objList]); //metto tra le dipendenze objlist perchè questi task 
    // potrebbero cambiare e voglio che lo useEffect venga fatto solo in questo caso
  
    function done(i) { // questa è la funzione che viene fatta quando qualcosa cambia nell' input
      setObjs((prevObjs) => { //usa il set nella versione con il prev value
        const newObjs = [...prevObjs]; //clona l array di oggetti un nuovo array temporaneo 
        newObjs[i] = { ...newObjs[i], completed: !newObjs[i].completed }; // crea un oggetto clonato
        // e modifica la proprietà completed al valore opposto , poi sostituisce l oggetto vecchio all indice specificato con questo
        return newObjs; // ritorna il nuovo array che serve al setObjs 
      });
    }
  
    return (
      <>
        {objs.map((ob, i) => (
          <li key={i} className={ob.completed ? "done" : ""}>
            <input
              type="checkbox"
              checked={ob.completed}
              onChange={() => done(i)}
            />
            <span>
              {ob.id} - {ob.title}
            </span>
          </li>
        ))}
      </>
    );
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
