import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [new Quote(1, 'Roy', 'Legacy is greater than currency', 'Gary Vaynerchuk') ];
  deleteQuote(isComplete, index) {
    if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);
          if (toDelete) {
            this.quotes.splice(index, 1);
        }
    }
}
  constructor() { }

  ngOnInit() {
  }

}
