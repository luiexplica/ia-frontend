import { Injectable } from '@angular/core';
import { toast } from 'ngx-sonner';

interface Toast_I {
  position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
  title: string;
  message?: string;
  type: "default" | "success" | "error" | "warning" | "info";

}

@Injectable({
  providedIn: 'root'
})
export class ToastsService {

  private toastDefault: Toast_I = {
    position: "top-right",
    title: "Title",
    message: "",
    type: "default"
  }

  duration: number = 2500;

  emitToast({ position, title, message, type }: Toast_I) {

    const toastData: Toast_I = {
      position: position || this.toastDefault.position,
      title: title || this.toastDefault.title,
      message: message || this.toastDefault.message,
      type: type || this.toastDefault.type
    }

    const toastOptions = {
      position: toastData.position,
      description: toastData.message,
      duration: this.duration
    };

    switch (type) {
      case "success":
        toast.success(toastData.title, toastOptions);
        break;
      case "error":
        toast.error(toastData.title, toastOptions);
        break;
      case "warning":
        toast.warning(toastData.title, toastOptions);
        break;
      case "info":
        toast.info(toastData.title, toastOptions);
        break;
      default:
        toast(toastData.title, toastOptions);
        break;
    }

  }

}
