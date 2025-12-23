import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (isSuccess: boolean, message: string): void => {
  if (isSuccess) {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: "colored",
      className:"toast-success-custom",
      style: {
        fontSize: "14px",
        fontWeight: 600,
        backgroundColor: "#156082",
        color: "white",
      },
      transition: Slide,
    });
  } else {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      theme: "colored",
      className:"toast-error-custom",
      style: {
        fontSize: "14px",
        fontWeight: 600,
        backgroundColor: "#156082",
        color: "white",
      },
      transition: Slide,
    });
  }
};
