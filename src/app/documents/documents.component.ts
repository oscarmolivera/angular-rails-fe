import { Component, OnInit } from '@angular/core';
import { Document } from './documents';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  pageTitle = 'Document Dashboard';
  documents: Document[] = [
    {
      title: 'First Document',
      description: 'Una descripcion sencilla del doc.',
      file_url: 'http://oscarmolivera.me',
      updated_at: '26/08/2019',
      image_url: 'https://picsum.photos/200/300'
    },
    {
      title: 'Second Document',
      description: 'Una descripcion sencilla del doc.',
      file_url: 'http://oscarmolivera.me',
      updated_at: '26/08/2019',
      image_url: 'https://picsum.photos/220/300'
    },
    {
      title: 'Last Document',
      description: 'Una descripcion sencilla del doc.',
      file_url: 'http://oscarmolivera.me',
      updated_at: '26/08/2019',
      image_url: 'https://picsum.photos/220/350'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
