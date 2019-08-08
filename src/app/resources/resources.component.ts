import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    hljs.registerLanguage('javascript', javascript);
  }
}
