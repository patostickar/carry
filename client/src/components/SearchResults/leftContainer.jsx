// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setFilters, removeFilters } from '../../redux/carsResults.js';

// function LeftContainer() {
//   const dispatch = useDispatch();
//   const [doors, setDoors] = useState(false);
//   const [manual, setManual] = useState(false);
//   const [automatic, setAutomatic] = useState(false);
//   const [aircon, setAircon] = useState(false);
//   const [Small, setSmall] = useState(false);
//   const [Medium, setMedium] = useState(false);
//   const [Large, setLarge] = useState(false);
//   const [Premium, setPremium] = useState(false);
//   const [Convertible, setConvertible] = useState(false);
//   const [Minivan, setMinivan] = useState(false);
//   const [SUVs, setSUVs] = useState(false);

//   function handleClick(prop, filter) {
//     if (prop) {
//       dispatch(removeFilters(filter));
//     } else {
//       dispatch(setFilters(filter));
//     }
//   }

//   // transmission,
//   // mpg,
//   // img,
//   // seats,
//   // large_suitcase: largeSuitcase,
//   // small_suitcase: smallSuitcase,

//   return (
//     <div className='leftContainer'>
//       <div className='googleMap'>IFRAME GOOGLE MAP</div>
//       <div className='listFilter'>
//         <div className='filterTitle'>
//           <h1 className='lsTitle'>Filter</h1>
//           <span className='clearfilter'>Clear all filters</span>
//         </div>
//         {/* <div className='lsItem'>
//           <label htmlFor=''>Location (Bogotá)</label>
//           <div className='inputItem'>
//             <input type='checkbox' />
//             <span>Airport (in terminal)</span>
//           </div>
//           <div className='inputItem'>
//             <input type='checkbox' />
//             <span>Airport (meet & greet)</span>
//           </div>
//           <div className='inputItem'>
//             <input type='checkbox' />
//             <span>Airport (shuttle)</span>
//           </div>
//           <div className='inputItem'>
//             <input type='checkbox' />
//             <span>Airport (car rental centre)</span>
//           </div>
//           <div className='inputItem'>
//             <input type='checkbox' />
//             <span>All other locations</span>
//           </div>
//         </div> */}

//         <div className='lsItem'>
//           <label htmlFor=''>Price Range</label>
//           <div className='inputItem'>
//             <span>US$100 - US$380</span>
//             <div>
//               <input
//                 type='range'
//                 min='100'
//                 max='370'
//                 aria-valuetext='100-380'
//                 aria-label='Minimum price'
//               />
//             </div>
//           </div>
//         </div>

//         <div className='lsItem'>
//           <label htmlFor=''>Car specs</label>
//           <div className='inputItem'>
//             <input
//               type='checkbox'
//               disabled
//               defaultChecked={aircon}
//               onChange={() => setAircon(!aircon)}
//               onClick={() =>
//                 handleClick(aircon, { key: 'air_conditioning', value: aircon })
//               }
//             />
//             <span>Air Conditioning</span>
//           </div>
//           <div className='inputItem'>
//             <input
//               type='checkbox'
//               disabled
//               defaultChecked={doors}
//               onChange={() => setDoors(!doors)}
//               onClick={() =>
//                 handleClick(doors, { key: 'doors', value: 'fourPlusDoors' })
//               }
//             />
//             <span>4+ doors</span>
//           </div>
//         </div>

//         {/* <div className='lsItem'>
//           <label htmlFor=''>Mileage/Kilometres</label>
//           <div className='inputItem'>
//             <input type='checkbox' />
//             <span>Unlimited</span>
//           </div>
//         </div> */}

//         <div className='lsItem'>
//           <label htmlFor=''>Transmission</label>
//           <div className='inputItem'>
//             <input
//               type='checkbox'
//               defaultChecked={manual}
//               onChange={() => setManual(!manual)}
//               onClick={() =>
//                 handleClick(manual, { key: 'transmission', value: 'Manual' })
//               }
//             />
//             <span>Manual</span>
//           </div>
//           <div className='inputItem'>
//             <input
//               type='checkbox'
//               defaultChecked={automatic}
//               onChange={() => setAutomatic(!automatic)}
//               onClick={() =>
//                 handleClick(automatic, {
//                   key: 'transmission',
//                   value: 'Automatic',
//                 })
//               }
//             />
//             <span>Automatic</span>
//           </div>
//         </div>
//         <div className='lsItem'>
//           <label htmlFor=''>Car category</label>
//           <div className='inputItem'>
//             <input
//               type='checkbox'
//               defaultChecked={Small}
//               onChange={() => setSmall(!Small)}
//               onClick={() =>
//                 handleClick(Small, {
//                   key: 'class_name',
//                   value: 'Small',
//                 })
//               }
//             />
//             <span>Small</span>
//           </div>
//           <div className='inputItem'>
//             <input
//               type='checkbox'
//               defaultChecked={Medium}
//               onChange={() => setMedium(!Medium)}
//               onClick={() =>
//                 handleClick(Medium, {
//                   key: 'class_name',
//                   value: 'Medium',
//                 })
//               }
//             />
//             <span>Medium</span>
//           </div>
//           <div className='inputItem'>
//             <input
//               type='checkbox'
//               defaultChecked={Large}
//               onChange={() => setLarge(!Large)}
//               onClick={() =>
//                 handleClick(Large, {
//                   key: 'class_name',
//                   value: 'Large',
//                 })
//               }
//             />
//             <span>Large</span>
//           </div>
//           <div className='inputItem'>
//             <input
//               type='checkbox'
//               defaultChecked={Premium}
//               onChange={() => setPremium(!Premium)}
//               onClick={() =>
//                 handleClick(Premium, {
//                   key: 'class_name',
//                   value: 'Premium',
//                 })
//               }
//             />
//             <span>Premium</span>
//           </div>
//           <div className='inputItem'>
//             <input
//               type='checkbox'
//               defaultChecked={Convertible}
//               onChange={() => setConvertible(!Convertible)}
//               onClick={() =>
//                 handleClick(Convertible, {
//                   key: 'class_name',
//                   value: 'Convertible',
//                 })
//               }
//             />
//             <span>Convertible</span>
//           </div>
//           <div className='inputItem'>
//             <input
//               type='checkbox'
//               defaultChecked={Minivan}
//               onChange={() => setMinivan(!Minivan)}
//               onClick={() =>
//                 handleClick(Minivan, {
//                   key: 'class_name',
//                   value: 'Minivan',
//                 })
//               }
//             />
//             <span>Minivan</span>
//           </div>
//           <div className='inputItem'>
//             <input
//               type='checkbox'
//               defaultChecked={SUVs}
//               onChange={() => setSUVs(!SUVs)}
//               onClick={() =>
//                 handleClick(SUVs, {
//                   key: 'class_name',
//                   value: 'SUVs',
//                 })
//               }
//             />
//             <span>SUVs</span>
//           </div>
//         </div>

//         {/* <div className='lsItem'>
//           <label htmlFor=''>Fuel policy</label>
//           <div className='inputItem'>
//             <input type='checkbox' />
//             <span>Like for like</span>
//           </div>
//         </div>

//         <div className='lsItem'>
//           <label htmlFor=''>Supplier</label>
//           <div className='inputItem'>
//             <input type='checkbox' />
//             <span>Alamo</span>
//           </div>
//           <div className='inputItem'>
//             <input type='checkbox' />
//             <span>Confort </span>
//           </div>
//           <div className='inputItem'>
//             <input type='checkbox' />
//             <span>Europcar</span>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// }

// export default LeftContainer;
