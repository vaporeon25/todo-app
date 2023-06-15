import styles from "./TodoItem.module.css";

export type Todo = {
    stuff : string
};

type TodoItemProps = {
  item: Todo; className?: string;
  deleteItem: (id: string) => void;
  completeItem: (id: string) => void;
};

function TodoItem() {
  return (
    <></>
  );
}

export default TodoItem;

  