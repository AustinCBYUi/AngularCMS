import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../../../../backend/models/client.model';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  imports: [
    NgForOf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clients: Client[] = []; // Holds list of clients

  constructor(
    private clientService: ClientService,
    private router: Router,
    ) { }


  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.error("Error fetching clients:", error);
      }
    );
  }


  //TODO - Edit Client
  editClient(client: any) {
    if (client && client.id) {
      this.router.navigate(['edit-client', client.id]);
    } else {
      this.router.navigate(['login']);
    }
  }

  //Delete a client
  deleteClient(id: string) {
    if (confirm("Are you sure you want to delete this client?")) {
      this.clientService.deleteClient(id).subscribe(
        () => {
          this.loadClients();
        },
        (error) => {
          console.error("Error deleting client:", error);
        }
      )
    }
  }
}
