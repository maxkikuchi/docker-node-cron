import Form from '../Components/Form';
import List from '../Components/List'
//import './style.scss'
import style from './app.module.scss'
import Cronometro from '../Components/Cronometro';
import React from 'react';
import { ITarefa } from '../types/tarefa'

function App() {
  const [tarefas, setTarefa] = React.useState<ITarefa[] | []>([])
  const [selecionado, setSelecionado ] = React.useState<ITarefa>()

  function SelecionarTarefa(tarefaSelecionado : ITarefa){
    setSelecionado(tarefaSelecionado);
    setTarefa(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionado.id ? true : false
    })))
    //console.log('selecionado:', tarefaSelecionado)
  }

  function ConcluirTarefa(){
      if (selecionado){
        setTarefa(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
          if (tarefa.id === selecionado.id){
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          
          return tarefa
        }))
      }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefa}/>
      <List 
        tarefas={tarefas}
        selecionarTarefa={SelecionarTarefa}
      />
      <Cronometro selecionado={selecionado} concluir={ConcluirTarefa}/>
    </div>
  );
}

export default App;
