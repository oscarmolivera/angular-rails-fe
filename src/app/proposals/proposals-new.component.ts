import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'proposals-new',
  templateUrl: './proposals-new.component.html'
})

export class ProposalsNewComponent implements OnInit {
  proposal = new Proposal();

  constructor() { }

  ngOnInit() {
  }
}
