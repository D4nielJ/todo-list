import todoList from '../../utils/todoList.js';

jest.mock('../localStorage/localStorage.js');

describe("Function for updating an item's index value", () => {
  test('Should reorder the indexes from the tasks', () => {
    // Arrange
    todoList.addTask('test 1');
    todoList.addTask('test 2');

    // Act
    const removedTask = todoList.removeTask(0);
    todoList.addTaskAt(removedTask, 1);

    // Asertion
    expect(todoList.arr[1].index).toBe(1);
  });

  test('Should reorder the indexes from the tasks', () => {
    // Arrange
    todoList.arr = [];
    todoList.addTask('test 1');
    todoList.addTask('test 2');
    todoList.addTask('test 3');
    todoList.addTask('test 4');

    // Act
    const removedTask = todoList.removeTask(2);
    todoList.addTaskAt(removedTask, 0);

    // Assertion
    expect(todoList.arr[0].index).toBe(0);
    expect(todoList.arr[1].index).toBe(1);
    expect(todoList.arr[2].index).toBe(2);
    expect(todoList.arr[3].index).toBe(3);
  });
});
