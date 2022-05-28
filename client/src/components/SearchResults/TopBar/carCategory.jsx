import { useDispatch } from 'react-redux';
import { setCarCategory } from '../../../redux/carsResults.js';

export default function carCategory({ category, img }) {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    let { name } = event.currentTarget;
    name = name.toLowerCase();
    dispatch(setCarCategory({ name, checked: true }));
  };
  return (
    <li>
      <button
        className='categoryMiniCard'
        onClick={handleClick}
        name={category}
      >
        <img src={img} alt='' />
        <span>{category}</span>
      </button>
    </li>
  );
}
