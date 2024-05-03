import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardService } from '../card.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-edit-card',
  templateUrl: './add-edit-card.component.html',
  styleUrls: ['./add-edit-card.component.css']
})
export class AddEditCardComponent {
  @Input() showModal = false;
  @Output() addCard = new EventEmitter<any>();

  newCard: any = {
    title: '',
    description: '',
    column: 'To Do'
  };
  constructor(private cardService: CardService, private dialogRef: MatDialogRef<AddEditCardComponent>) {}

  closeModal(): void {
    this.newCard = { 
      title: '',
      description: '',
      column: 'To Do'
    };
    this.showModal = false;
  }

  submitForm(): void {
    if (this.newCard.title && this.newCard.description && this.newCard.column) {
      this.cardService.sendNewCard(this.newCard); 
      this.resetForm();
      this.dialogRef.close(); 
    } else {
      alert('Please fill out all required fields.');
    }
  }
  resetForm(): void {
    this.newCard = {
      title: '',
      description: '',
      column: 'To Do'
    };
  }
}
