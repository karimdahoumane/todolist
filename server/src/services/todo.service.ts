import Todo from "../models/todo.model"
import { ITodo } from "../types/todo"

const findAllTodos = async (): Promise<ITodo[]> => {
  const todos: ITodo[] = await Todo.find()
  if (!todos) {
    throw new Error("No todos found")
  }
  return todos
}

const findTodoById = async (id: string): Promise<ITodo> => {
  const todo: ITodo | null = await Todo.findById(id)
  if (!todo) {
    throw new Error("Todo not found")
  }
  return todo
}

const createTodo = async (todoData: Pick<ITodo, "name" | "description" | "done">): Promise<ITodo> => {
  const todo: ITodo = new Todo({
    name: todoData.name,
    description: todoData.description,
    done: todoData.done,
  });

  const newTodo: ITodo = await todo.save();
  return newTodo;
};

const updateTodoById = async (id: string, updateData: Partial<ITodo>): Promise<void> => {
  await Todo.findByIdAndUpdate(id, updateData);
};

const deleteTodoById = async (id: string): Promise<void> => {
  await Todo.findByIdAndRemove(id);
};

export { findAllTodos, findTodoById, createTodo, updateTodoById, deleteTodoById }