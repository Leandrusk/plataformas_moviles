import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importar NavController

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

  constructor(private navController: NavController) {} // Inyectar NavController

  // Función que se ejecuta cuando se hace clic en el botón "Iniciar"
  onLogin() {
    if (this.email && this.password) {
      // Si ambos campos están completos, mostramos la alerta de éxito
      this.alertMessage = '¡Inicio de sesión exitoso!';
      this.showAlert = true; // Muestra la alerta

      // Redirigir a la sección de catálogos (suponiendo que la página de catálogos es "Tab5Page")
      this.navController.navigateForward('/tab4'); // Redirige a la página de catálogos
    } else {
      // Si falta algún campo, mostramos un mensaje de error
      this.alertMessage = 'Por favor, complete todos los campos.';
      this.showAlert = true; // Muestra la alerta con el mensaje de error
    }
  }

  // Función que se ejecuta cuando la alerta es cerrada
  onAlertDismiss() {
    this.showAlert = false; // Oculta la alerta
  }
}
