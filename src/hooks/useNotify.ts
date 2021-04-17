import { toast } from "react-toastify";

export const useNotify = () => {
    const notify = {
      success: (content: string) => toast.success(content),
      error: (content: string) => toast.error(content),
      warning: (content: string) => toast.warning(content),
    };
  
    return { notify };
  };