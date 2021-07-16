import { toast } from "react-toastify";

export const toastError = (error) => {
  const message = null;
  if (typeof error === "object" && error.message) {
    ({ message } = error);
  }
  if (message !== null && typeof message !== "undefined" && message !== "") {
    toast.error(message);
  }
};
