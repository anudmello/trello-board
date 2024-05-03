import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCardComponent } from '../add-edit-card/add-edit-card.component';
import { CardService } from '../card.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  columns = [
    { name: 'To Do', cards: [{ title: 'Task 1', description: 'Description for Task 1' }] },
    { name: 'Doing', cards: [{ title: 'Task 2', description: 'Description for Task 2' }] },
    { name: 'Done', cards: [{ title: 'Task 3', description: 'Description for Task 3' }] }
  ];

  constructor(private dialog: MatDialog, private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getNewCard().subscribe((newCard: any) => {
      if (newCard) {
        this.addCard(newCard);
      }
    });
  }


  
  openAddCardModal(): void {
    const dialogRef = this.dialog.open(AddEditCardComponent, {
      width: '400px',
      data: { title: '', description: '', column: 'To Do' }
    });
  }

  addCard(newCard: any): void {
    const targetColumn = this.columns.find(col => col.name === newCard.column);
    if (targetColumn) {
      targetColumn.cards.push(newCard);
    }
  }

  deleteCard(column: any, card: any): void {
    const columnIndex = this.columns.findIndex(col => col.name === column.name);
    if (columnIndex !== -1) {
      const cardIndex = this.columns[columnIndex].cards.indexOf(card);
      if (cardIndex !== -1) {
        this.columns[columnIndex].cards.splice(cardIndex, 1);
      }
    }
  }

  onDrop(event: CdkDragDrop<any>): void {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, previousIndex, currentIndex);
    } else {
      const item = event.previousContainer.data[previousIndex];
      event.previousContainer.data.splice(previousIndex, 1);
      event.container.data.splice(currentIndex, 0, item);
    }
  }
  private findColumn(columnId: string): any {
    return this.columns.find(col => col.name.toLowerCase().replace(' ', '-') === columnId);
  }
  handleAddCard(newCard: any): void {
    console.log('New Card:', newCard); 

  }
}
