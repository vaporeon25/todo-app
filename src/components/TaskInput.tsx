import { FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";
import styles from "./TaskInput.module.css";
import { Todo } from "./TodoItem";

type TaskInputProps = {
  className?: string;
  createItem: (todoItem: Todo) => void;
};

type TaskInputForm = {
  task: string;
};

export default function TaskInput({ createItem, className }: TaskInputProps) {
  const { register, handleSubmit, reset } = useForm<TaskInputForm>();

  const onSubmit = (data: TaskInputForm) => {
    let newItem: Todo = {
        stuff :" Hello " 
    //   Task: data.task,
    //   Id: new Date().getTime().toString(),
    //   completed: false
    };

    createItem(newItem);
    reset();
  };

  return (
    <form
      className={`${styles.FormWrapper} ${className}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className={styles.Input}
        placeholder="eg : clean the house"
        {...register("task")}
      />
      <button type="submit" className={styles.SubmitButton}>
        <svg id="svg" height="800px" width="800px" viewBox="0 0 60.364 60.364">
          <g>
            <path
              fill="white"
              d="M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269   L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91   c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z"
            />
          </g>
        </svg>
      </button>
    </form>
  );
}
