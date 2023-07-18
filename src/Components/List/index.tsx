//import './style.scss'
import style from './list.module.scss'
import Item from './Item'
import React from 'react'
import { ITarefa } from '../../types/tarefa'

interface Props{
    tarefas : ITarefa[]
    selecionarTarefa : (tarefaSelecionada : ITarefa) => void
}

function List({tarefas, selecionarTarefa} : Props){
/*     const tarefas = [
        {
            tarefa: "React",
            tempo: "02:00:00"
        },
        {
            tarefa: "Javascript",
            tempo: "01:00:00"
        },
        {
            tarefa: "Typescript",
            tempo: "03:00:00"
        }
    ]
 */
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia 
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        key={item.id} 
                        {...item}
                        selecionarTarefa={selecionarTarefa} 
                    />
                ))}
            </ul>
        </aside>
    )
}

/* function List2(){
    let tarefas = [
        {
            tarefa: "React",
            tempo: "02:00:00"
        },
        {
            tarefa: "Javascript",
            tempo: "01:00:00"
        },
        {
            tarefa: "Typescript",
            tempo: "03:00:00"
        }
    ]

    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                        tarefas = [...tarefas, {tarefa: "Angular", tempo: "05:00"}]
                        console.log('', tarefas)
                    }
                }> Estudos do Dia 2
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} tarefa={item.tarefa} tempo={item.tempo}  />
                ))}
            </ul>
        </aside>
    )
} */

/* function List3(){
    const [tarefas, setTarefa] = React.useState([
        {
            tarefa: "React",
            tempo: "02:00:00"
        },
        {
            tarefa: "Javascript",
            tempo: "01:00:00"
        },
        {
            tarefa: "Typescript",
            tempo: "03:00:00"
        }
    ])

    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefa([...tarefas, {tarefa: "Angular", tempo: "05:00:00"}])
            }}> 
            Estudos do Dia 3 
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} tarefa={item.tarefa} tempo={item.tempo}  />
                ))}
            </ul>
        </aside>
    )
} */

export default List