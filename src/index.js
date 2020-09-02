import React , {Component} from "react";
import { render } from "react-dom";
import axios from 'axios';

class App extends Component{
    constructor(){
        super()
        this.state = {
            data: '',
            getData : ''
        }
    }

    componentDidMount = () =>{
        // api calls , variable decalaration , object decalaration
        // this is prefered component life cycle 
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            res => {
                console.log('totalData', res.data)
                //this.state.getData = "sdads"
                //this.setState({getData : res.data.filter(item =>item.id === 1)})
                this.setState({getData : res.data})
                console.log('getData', this.state.getData)
            }
        )
    }

    render(){
        return(
            <div>
                {Object.keys(this.state.getData).map((key) => (
                    <div className="container">
                        <label> get call data </label><br/>
                        <hr/>
                      <span className="left">{'userId : ' + this.state.getData[key].userId}</span> <br/>
                      <span className="left">{'ID : ' + this.state.getData[key].id}</span> <br/>
                      <span className="right">{"Title : " + this.state.getData[key].title}</span> <br/>
                      <span className="right">{"Body : " + this.state.getData[key].body}</span>
                    </div>
                ))}
            </div>
        )
    }

}

render(<App/> , document.getElementById('root'))