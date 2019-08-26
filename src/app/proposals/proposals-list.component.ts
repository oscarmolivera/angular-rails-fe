import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposals-list',
  templateUrl: './proposals-list.component.html'
})
export class ProposalsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  proposalOne: Proposal = new Proposal(19, 'AseFarma SPA', 'http://portfolio.oscarmolivera.me', 'Angular4', 40, 6000, 1, 'jules.barros@asefarma.cl');
  proposalTwo: Proposal = new Proposal(23, 'Miranda CL', 'http://portfolio.oscarmolivera.me', 'Angular4', 40, 6000, 1, 'sendos@miranda.cl');
  proposalThree: Proposal = new Proposal(36, 'O\'Higgings', 'http://portfolio.oscarmolivera.me', 'Angular4', 40, 6000, 1, 'o.hilgh@ohiggings.com');

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
  
}
