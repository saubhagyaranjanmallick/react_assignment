import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const options = {
  autoClose: 2000,
  className: "",
  position: toast.POSITION.TOP_RIGHT,
  theme:toast.colored
};

export const toastSucess = (message) => {
  toast.success(message, options);
};
export const toastError = (message) => {
  toast.error(message, options);
};
export const toastWarning = (message) => {
  toast.warning(message, options);
};