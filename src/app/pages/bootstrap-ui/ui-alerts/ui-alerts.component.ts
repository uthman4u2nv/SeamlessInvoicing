import { Component } from '@angular/core';
import * as Prism from 'prismjs';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { AlertModule } from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-ui-alerts',
  standalone: true,
  imports: [PageTitleComponent,AlertModule],
  templateUrl: './ui-alerts.component.html',
  styleUrl: './ui-alerts.component.scss'
})
export class UiAlertsComponent {

  breadCrumbItems!: Array<{}>;

  ngOnInit() {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Base UI' },
      { label: 'Alerts', active: true }
    ];
    Prism.highlightAll();
  }

  alerts: any = [];

  showalert(): void {
    this.alerts.push({
      type: 'success alert-outline alert-border-left alert-modern alert-label-icon label-arrow',
      msg: `Nice, you triggered this alert message!`,
      timeout: 5000,
      class: "alert,alert-outline"
    });
  }

}
