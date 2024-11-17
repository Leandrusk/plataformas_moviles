import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  email: string = ''; // Variable para almacenar el email
  password: string = ''; // Variable para almacenar la contraseña
  showAlert: boolean = false; // Estado de la alerta
  alertMessage: string = ''; // Mensaje de la alerta



  onLogin() {
    if (this.email && this.password) {
      // Si ambos campos están completos, mostramos la alerta
      this.showAlert = true;
    } else {
      // Si falta algún campo, mostramos un mensaje de error
      this.alertMessage = 'Por favor, complete todos los campos.';
      this.showAlert = true; // Mostramos la alerta con el mensaje de error
    }
  }

  

  constructor() {}
// Función que se ejecuta cuando se hace clic en el botón "Iniciar"
showLoginAlert() {
  this.showAlert = true; // Muestra la alerta
}

  // Función que se ejecuta cuando la alerta es cerrada
  onAlertDismiss() {
    this.showAlert = false; // Oculta la alerta
  }
}
