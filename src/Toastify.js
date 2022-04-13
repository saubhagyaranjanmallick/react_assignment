
import React  from 'react';
import { toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Toastify() {

  const notify = () => {
    toast("Default Notification !");

    toast.success("Login Sucessfully !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast.error("Login Error !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast.warn("Warning Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast.info("Info Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.TOP_RIGHT,
      className: 'foo-bar'
    });
  };

  return <button onClick={notify}>Notify</button>;
}