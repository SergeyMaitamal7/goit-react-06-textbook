import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <>
      <div> TaskForm</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" />
        <Button type="submit">AddTask</Button>
      </form>
    </>
  );
};
