//app.jsx Clases. 1.0.3
//Las clases se usan para trabajar con estados
//Mutabilidad??

//Eventos
class Hello extends React.Component{
    constructor(oProps){
        super(oProps)
        //definiendo estados iniciales
        this.state = {
            nombre: "Eduardo"
        }

    }

    render(){
        return (
            //los estados se definen solo dentro de la clase
            //se suelen cambiar por medio de eventos. Eventos de usuario o servidor
            <h1 onClick={this.despedirse}>Hola {this.state.nombre}</h1>
        )
    }

    //arrow function
    //si no se incluye una arrow function en el metodo no cambia el estado.
    //porque? ni idea, dice que se escapa al alcance del curso
    despedirse = ()=>{
        this.setState({
            nombre:"Christian"
        })
    }
}//Hello

//fin del curso
const oDivApp = document.getElementById("app")
ReactDOM.render(<Hello />,oDivApp)