import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-edit-client',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.css'
})
export class EditClientComponent implements OnInit {
  editClientForm!: FormGroup;
  clientId!: string;
  client: any = {};

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('id') || '';

    this.editClientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      business: ['', Validators.required],
      createdDate: ['', Validators.required],
      lastServiced: ['', Validators.required],
      accountNotes: ['', Validators.required],

    });

    if (this.clientId) {
      this.clientService.getClientById(this.clientId).subscribe(client => {
        if (client) {
          this.editClientForm.patchValue(client);
          this.client = client;
        }
      });
    }
  }

  onSubmit(): void {
    if (this.editClientForm.valid) {
      const updatedClient = { id: this.clientId, ...this.editClientForm.value };
      this.clientService.updateClient(this.clientId, updatedClient).subscribe(() => {
        this.router.navigate(['client']);
      });
    }
  }
}
