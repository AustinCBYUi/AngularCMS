import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-client',
  imports: [
    FormsModule,
    RouterLink,
  ],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {
  newClient = {
    firstName: '',
    lastName: '',
    email: '',
    business: '',
    phoneNumber: '',
    createdDate: '',
    lastServiced: '',
    accountNotes: '' };

  constructor(private clientService: ClientService, private router: Router) {
  }

  addClient() {
    if (this.newClient.firstName && this.newClient.lastName) {
      this.clientService.addClient(this.newClient).subscribe({
        next: (response) => {
          console.log("Client added successfully:", response);
          this.router.navigate(['/clients']);
        },
        error: (error) => {
          console.error("Error adding client:", error);
        }
      });
    } else {
    }
  }

}
