import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

export default (icon, title) => {
  Swal.fire({
    position: 'top-end',
    toast: true,
    icon,
    title,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
};
