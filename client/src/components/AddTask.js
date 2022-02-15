import React, { Component } from 'react'

//FIX THIS
import TodoContract from "..\\contracts\\Todo.json";
import Web3 from 'web3'



class AddTask extends Component { 


    


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