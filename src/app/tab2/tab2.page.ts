import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  email: string = '';
  password: string = '';

  constructor(private alertController: AlertController) {}

  async register() {
    // Verificar si los campos están completos
    if (this.email && this.password) {
      // Si los campos son válidos, mostrar alerta de éxito
      const alert = await this.alertController.create({
        header: '¡Éxito!',
        message: 'Te has registrado correctamente.',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      // Si los campos no están completos, mostrar un mensaje de advertencia
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
