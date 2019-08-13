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
    // Specifies the language library to load for Highlights.js instead of loading all languages
    hljs.registerLanguage('javascript', javascript);
  }
}
