import React, { Component } from 'react'


class AddTask extends Component { 


    render(){
        return(
            <div> 
                <form> 
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