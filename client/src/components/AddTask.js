import React, { Component } from 'react'
import Todo from "./contracts/Todo.json";

class AddTask extends Component { 

    constructor(props) {
        super(props)
    
        this.state = {
          TodoInstance: undefined,
          account: null,
          web3: null,
          task:'',
          id:'',
          completed = false
        }
      }


      updateTask = event => {
        this.setState({task : event.target.value});
      }

    render(){
        return(
            <div> 
                <form id > 
                    <label> 
                        <p> Type Task below </p>
                        <input task = "task"/>
                    </label>
                </form>

            </div>

        );
    }

}
export default AddTask;