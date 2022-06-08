import axios from 'axios'
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ClearBookingState } from '../redux/booking';



const Response = ()=>{
 const dispatch = useDispatch()
 const { User } = useSelector((state) => state.user);
const { pickupDate, dropoffDate } = useSelector((state) => state.searchBar);
const { booking } = useSelector((state) => state.booking);

const Pdate = new Date(pickupDate);
const Ddate = new Date(dropoffDate);
const PickDate = Pdate.getFullYear() + "/" + (Pdate.getMonth() + 1) + "/" + Pdate.getDate();
const DropDate = Ddate.getFullYear() + "/" + (Ddate.getMonth() + 1) + "/" + Ddate.getDate();
  

async function CreateBooking(data) {
  try {
     await axios.post("/bookings", data);
  } catch (error) {
    console.log(error);
  }
}

const handleSearch = async () => {
   await CreateBooking({
    carTypeId: booking.carTypeId,
    customerId: User.id,
    locationId: booking.locationId,
    pickUpDate: PickDate,
    dropOffDate: DropDate,
  });
}



// console.log(data);
useEffect(() => {
    (async ()=>{ await handleSearch()})()
    return () => {}
}, [])

const onClick=()=>{dispatch(ClearBookingState())}

return(<>
    <div>gracias por su compra </div>
    <Link to='/profile'>

    <button onClick={onClick}>Mis reservas</button>
    </Link>
</>
)


}
export default Response