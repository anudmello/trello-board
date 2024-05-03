import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private newCardSubject = new BehaviorSubject<any>(null);
  
  constructor() {}

  // Method to send new card data
  sendNewCard(newCard: any): void {
    this.newCardSubject.next(newCard);
  }

  // Method to subscribe to new card data changes
  getNewCard(): Observable<any> {
    return this.newCardSubject.asObservable();
  }
}
