import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient,private toastController: ToastController) { }
    
  calculate(data) {
    return this.http.post(environment.baseUrl + "api/city/enquiery",data);
  }
   
  getCars() {
    return this.http.get(environment.baseUrl + "api/car");
  }

  contactUs(data) {
    return this.http.post(environment.baseUrl + "api/contact-us", data);
  }

  async showToast(message, color?, duration?) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration || 2000,
      color: color || 'success',
    });
    toast.present();
  }

  showSuccess(message, duration?) {
    this.showToast(message, 'success', duration);
  }

  showError(message, duration?) {
    this.showToast(message, 'danger', duration);
  }
}