import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-view-client',
  imports: [
    RouterLink
  ],
  templateUrl: './view-client.component.html',
  styleUrl: './view-client.component.css'
})
export class ViewClientComponent implements OnInit {
  client: any = {};

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
  ) {}

  ngOnInit() {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.clientService.getClientById(clientId).subscribe({
        next: (data) => {
          this.client = data;
        },
        error: (error) => {
          console.error("Error fetching client details:", error);
        }
      })
    }
  }
}
