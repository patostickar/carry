import { useDispatch } from 'react-redux';
import { setOneCarCategory } from '../../../redux/carsResults.js';
import styles from './styles/carCategory.module.css';

export default function carCategory({ category, img }) {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    let { name } = event.currentTarget;
    name = name.toLowerCase();
    dispatch(setOneCarCategory({ name }));
  };
  return (
    <li>
      <button
        className={styles.categoryMiniCard}
        onClick={handleClick}
        name={category}
      >
        <img src={img} alt='' />
        <span>{category}</span>
      </button>
    </li>
  );
}
