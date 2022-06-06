// Usar este componente para agregar funciones generales a todos los componentes
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const TabTitle = (newTitle) => {
  return (document.title = newTitle);
};

export const Alerts = (icon,title)=>{
  Swal.fire({
    position: 'top-end',
    toast:true,
    icon,
    title,
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
}