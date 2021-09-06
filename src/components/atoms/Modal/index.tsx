import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import styles from './Modal.module.scss'

export const Modal = Swal.mixin({
  background: '#272727',
  confirmButtonColor: '#C74647',
  showCancelButton: true,
  cancelButtonColor: '#272727',
  reverseButtons: true,
  focusConfirm: false,
  customClass: {
    title: `${styles.title}`,
    htmlContainer: `${styles.fontcolor}`,
    cancelButton: `${styles.cancelbutton}`,
    confirmButton: `${styles.confirmbutton}`
  }
})
