import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  /**
   * Verify if the passed router is the current active route displayed
   * @param link The relative path to test
   */
  public isActiveRoute(link: string): boolean {
    return this.router.isActive(link, true);
  }

  public runBenchmark() {
    this.router.navigate(['/chart', { run: true }]);
  }
}
