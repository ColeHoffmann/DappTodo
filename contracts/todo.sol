pragma solidity ^0.5.0;
contract todo{
uint public tasks = 0;

struct Task {
    uint id;
    string content;
    bool completed;
    }       
        mapping(uint => Task) public tasks; 

    function createTask(string memory _content) public {
        taskCount++;
     tasks[taskCount] = Task(taskCount, _content, false);}

}