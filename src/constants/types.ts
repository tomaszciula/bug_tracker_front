export type BoardColumns = "To do" | "In progress" | "Testing" | "Done";
export interface Data {
  id: number;
  title: string;
  project: string;
  status: BoardColumns;
}
export interface ITodo {
  id: number;
  done: boolean;
  text: string;
  important: Category;
  todos: ITodo[];
  setTodos: Function;
}
[];

export interface IState {
  activeTab: string;
}
export interface INote {
  id: number;
  title: string;
  content: string;
}
