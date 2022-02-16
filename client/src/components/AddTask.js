import React, { Component } from 'react'

//FIX THIS
import TodoContract from "..\\contracts\\Todo.json";
import Web3 from 'web3'



//throwing this in here for now. Calling these smart contracts has been a huge pain in the ass ngl. 
//need to check out this documentation and figure this out. 
//https://web3js.readthedocs.io/en/v1.2.9/
//const contract = web3.eth.contract(contractAbi); 
//const contractInstacnce = contract.at(contractAddress)

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