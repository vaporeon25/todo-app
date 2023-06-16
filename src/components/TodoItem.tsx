import styles from "./TodoItem.module.css";

export type Todo = {
    Id : string 
    Task : string
    completed : boolean
};

type TodoItemProps = {
  item: Todo; className?: string;
  deleteItem: (id: string) => void;
  completeItem: (id: string) => void;
};

function TodoItem({
  item,
  className,
  completeItem,
  deleteItem,
}: TodoItemProps) {
  console.log(item.Id);
  return (
    <div className={`${className} ${styles.ItemWrapper}`}>
      <p>{item.Task}</p>
      <div className={styles.ButtonWrapper}>
        <button onClick={() => completeItem(item.Id)}>complete</button>
        <button onClick={() => deleteItem(item.Id)}>delete</button>
      </div>
    </div>
  );
}

export default TodoItem;

  