import { toast } from 'react-toastify'

const defaultToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light'
}

const toasts = {
  success: (message) => toast.success(message, defaultToastOptions),
  error: (message) => toast.error(message, defaultToastOptions),
  info: (message) => toast.info(message, defaultToastOptions),
  warn: (message) => toast.warn(message, defaultToastOptions)
}

export default toasts
