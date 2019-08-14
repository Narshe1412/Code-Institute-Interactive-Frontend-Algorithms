import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  /**
   * Verify if the passed router is the current active route displayed
   * @param link The relative path to test
   */
  public isActiveRoute(link: string): boolean {
    return this.router.isActive(link, true);
  }

  /**
   * Executed on click of the navbar button. Redirects the user to the chart component and passes by parameter
   * the execution of the run to be handled by the component
   */
  public runBenchmark() {
    this.router.navigate(['/chart', { run: true }]);
  }
}
