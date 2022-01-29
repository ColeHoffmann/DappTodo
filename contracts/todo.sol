uint public tasks = 0;
#Creating the structure with tasks. 
struct Task {
    uint id;
    string content;
    bool completed;
    }       
mapping(uint => Task) public tasks;
}

#
function createTask(string memory _content) public {
    taskCount++;
    tasks[taskCount] = Task(taskCount, _content, false);
}