pragma solidity ^0.5.0;

contract Todo {

    uint public taskCount = 0;

//the need to make sure I add in a string of the task as content. 
    struct Task {
        uint id;
        string content;
        bool completed;
    }

    constructor() public {  
        createTask("This is our first Task");
    }

    mapping(uint => Task) public tasks;


    event TaskCreated(
        uint id,    
        string content,
        bool completed
    );

    function createTask(string memory _content) public {
        taskCount++;
        tasks[taskCount] = Task(taskCount, _content, false);
    }

    event TaskCompleted(
        uint id,
        bool completed
    );


    function toggleCompleted(uint _id) public {
        Task memory _task = tasks[_id];
        _task.completed = !_task.completed;
        tasks[_id] = _task;
        emit TaskCompleted(_id, _task.completed);
    }   

}