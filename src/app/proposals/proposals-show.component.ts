import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Proposal } from './proposal';

@Component({
  selector: 'proposals-show',
  templateUrl: './proposals-show.component.html',
  styleUrls: ['./proposals-show.component.scss'],
})

export class ProposalsShowComponent implements OnInit {

  id: number;
  routeId: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    );
  }
}
