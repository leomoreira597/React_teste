import React from "react";
import Primeiro from "./components/primeiro"
import ComParametros from "./components/ComParametros"
import ComFilhos from "./components/ComFilhos"
import Card from './components/layout/card'
import './App.css'
import Repeticao from "./components/Repeticao";


export default (props) => {
    return (
        <div className="App">
            <Card titulo="Repetição">
                <Repeticao></Repeticao>
            </Card>

            <Card titulo="Componentew com parametro">
                <ComParametros titulo="Acaba não" subtitulo="Mundao veio" />
            </Card>

            <Card titulo="Primeiro componente">
                <Primeiro />
            </Card>

            <Card titulo="exeercicio X">
                Conteudo
            </Card>
            {/*  */}
            {/* <Primeiro/>
         */}
        </div>
    )
}