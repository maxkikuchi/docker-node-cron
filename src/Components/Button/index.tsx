import React from 'react';
//import './style.scss'
import style from './button.module.scss' //.scss é uma extensão referente ao pacote Saas

//style com o plugin typescript-plugin-css-modules
class ButtonProd extends React.Component<{texto? : string}>{
    render() {
        return(
            <button className={style.button}>
                {this.props.texto}
            </button>
        )
    }
} 

interface Props{
    children?: React.ReactNode, 
    texto: string, 
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void
}

function ButtonProd2({children, type, texto, onClick }: Props)
{
    return(
        <button className={style.button} type={type} onClick={onClick}>
            <u>
            {children}
            {texto}
            </u>
        </button>
    )
} 

class ButtonProd2_OLD extends React.Component<{children?: React.ReactNode, texto: string, 
    type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }>{
    render() {
        return(
            <button className={style.button} type={this.props.type} onClick={this.props.onClick}>
                <u>
                {this.props.children}
                {this.props.texto}
                </u>
            </button>
        )
    }
} 

class ButtonProd3 extends React.Component<{children?: React.ReactNode}>{
    render() {
        return(
            <button className={style.button}>
                {this.props.children}
            </button>
        )
    }
} 

//Exemplo 1
class ButtonTeste1 extends React.Component{
    render() {
        const backgroundColor = 'blue';
        const styles = {
            backgroundColor
        }        

        return(
            <button style={styles}>
                Button
            </button>
        )
    }
}

//Exemplo 2
class ButtonTeste2 extends React.Component{
    render() {
        
        return(
            <button style={{color: "orange"}}>
                Button
            </button>
        )
    }
} 

//Exemplo 3
class ButtonTeste3 extends React.Component{
    render() {
        const estaAtivo = false;
        const styles = {
            backgroundColor: estaAtivo ? "green" : "red"
        }        
                
        return(
            <button style={styles}>
                Button
            </button>
        )
    }
}

export default ButtonProd2