import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  clientCount: number = 0;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClientCount().subscribe({
      next: (count) => {
        this.clientCount = count; //Store client count in the component
      },
        error: (error) => {
        console.error('Error fetching client count:', error);
      }
    })
  }
}
