import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [new Quote(1, 'Roy', 'Legacy is greater than currency', 'Gary Vaynerchuk', new Date(), 0, 0)];
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.dateCreated);
    this.quotes.push(quote);
}
  deleteQuote(isComplete, index) {
    if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);
          if (toDelete) {
            this.quotes.splice(index, 1);
        }
    }
}
  highlightingFunction(index) {
    const check = this.quotes[index].upVote;
    if (this.quotes.length > 0) {
      const votes = [];
    this.quotes.forEach(quote => votes.push(quote.upVote));
    if (check === Math.max(...votes)) {
      return true;
    }
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
