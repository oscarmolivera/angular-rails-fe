import { Component, OnInit } from '@angular/core';
import { Document } from './documents';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  documents: Document[] =[
    {
      title: "First Document",
      description: "Una descripcion sencilla del doc.",
      file_url: "http://oscarmolivera.me",
      updated_at: "26/08/2019",
      image: "Una imagen"
    },
    {
      title: "Second Document",
      description: "Una descripcion sencilla del doc.",
      file_url: "http://oscarmolivera.me",
      updated_at: "26/08/2019",
      image: "Una imagen"
    },
    {
      title: "Last Document",
      description: "Una descripcion sencilla del doc.",
      file_url: "http://oscarmolivera.me",
      updated_at: "26/08/2019",
      image: "Una imagen"
    }
  ]
}
