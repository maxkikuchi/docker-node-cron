import { TempoParaSegundos } from '../../common/utils/tempo'
import { ITarefa } from '../../types/tarefa'
import Button from '../Button'
import Relogio from './Relogio/relogio'
import style from './cronometro.module.scss'
import {useState, useEffect} from 'react'



function Cronometro1({selecionado, concluir} : {selecionado: ITarefa | undefined, concluir : () => void}){
    //console.log(TempoParaSegundos("01:01:01"))
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if (selecionado?.tempo)
        {
            setTempo(TempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])
        
    function IniciarCronometro(contador: number = 0){
        setTimeout(() => {
            if (contador > 0)
            {
                setTempo(contador - 1)
                return IniciarCronometro(contador - 1)
            }
            
            concluir();
            
        }, 1000);
    }

    return(
        <div className={style.cronometro}>
            {/* tempo: {tempo} */}
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo} />
            </div>
            <Button texto='' onClick={() => IniciarCronometro(tempo)}>
                Começar!
            </Button>
        </div>
    )
}

export default Cronometro1