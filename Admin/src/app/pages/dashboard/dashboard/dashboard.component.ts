import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { CountUpModule } from 'ngx-countup';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { SimplebarAngularModule } from 'simplebar-angular';
interface UserData {
  id: string;
  name: string;
  avatar: string;
  date: string;
  status: string;
  statusClass: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PageTitleComponent, CountUpModule, NgApexchartsModule, BsDropdownModule,CommonModule,SimplebarAngularModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  breadCrumbItems!: Array<{}>;
  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };

  public donutChartOptions: any;
  public donutChartOptions2: any;
  public donutChartOptions3: any;
  public areaChartOptions: any;
  public stackedColumnChartOptions: any;
  public structureWidget: any;

  users: UserData[] = [
    {
      id: 'Lec-2152',
      name: 'Donald Risher',
      avatar: 'assets/images/users/avatar-1.jpg',
      date: '20 Sep, 2022',
      status: 'Paid',
      statusClass: 'bg-success-subtle text-success'
    },
    {
      id: 'Lec-2153',
      name: 'Brody Holman',
      avatar: 'assets/images/users/avatar-2.jpg',
      date: '12 Apr, 2022',
      status: 'Unpaid',
      statusClass: 'bg-warning-subtle text-warning'
    },
    {
      id: 'Lec-2154',
      name: 'Jolie Hood',
      avatar: 'assets/images/users/avatar-3.jpg',
      date: '28 Mar, 2022',
      status: 'Paid',
      statusClass: 'bg-success-subtle text-success'
    },
    {
      id: 'Lec-2156',
      name: 'Howard Lyons',
      avatar: 'assets/images/users/avatar-5.jpg',
      date: '18 Sep, 2022',
      status: 'Refund',
      statusClass: 'bg-info-subtle text-info'
    },
    {
      id: 'Lec-2157',
      name: 'Howard Oneal',
      avatar: 'assets/images/users/avatar-6.jpg',
      date: '12 Feb, 2022',
      status: 'Paid',
      statusClass: 'bg-success-subtle text-success'
    },
    {
      id: 'Lec-2158',
      name: 'Jena Hall',
      avatar: 'assets/images/users/avatar-7.jpg',
      date: '30 Nov, 2022',
      status: 'Cancel',
      statusClass: 'bg-danger-subtle text-danger'
    }
  ];

  ngOnInit(): void {
    /**
       * BreadCrumb
       */
    this.breadCrumbItems = [
      { label: 'Dashboard' },
      { label: 'Dashboard', active: true }
    ];

    this.initializeDonutChartOptions('["--in-primary", "--in-light"]');
    this.initializeDonutChartOptions2('["--in-primary", "--in-light"]');
    this.initializeDonutChartOptions3('["--in-primary", "--in-light"]');
    this.initializeStackedColumnChart('["--in-primary", "--in-light"]');
    this.initializeStructureWidget('["--in-primary", "--in-light"]');
    this.initializeAreaChart('["--in-primary", "--in-light"]');

  }

  private initializeStackedColumnChart(color: string): void {
    const colors = this.getChartColorsArray(color);

    if (colors) {
      this.stackedColumnChartOptions = {
        chart: {
          height: 362,
          type: 'bar',
          stacked: false, // set to true if needed
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '35%',
          }
        },
        dataLabels: {
          enabled: false
        },
        series: [
          {
            name: 'Income',
            data: [38, 48, 41, 52, 22, 43, 36, 48, 24, 28, 36, 44]
          },
          {
            name: 'Outcome',
            data: [13, 20, 20, 8, 13, 27, 18, 22, 15, 16, 24, 22]
          }
        ],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        grid: {
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        colors: colors,
        legend: {
          show: false
        },
        fill: {
          opacity: 1
        }
      };
    }
  }
  private initializeDonutChartOptions(color: string): void {
    const colors = this.getChartColorsArray(color);

    if (colors) {
      this.donutChartOptions = {
        series: [60, 40],
        chart: {
          type: 'donut',
          height: 110,
        },
        colors: colors,
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        }
      };
    }
  }
  private initializeDonutChartOptions2(color: string): void {
    const colors = this.getChartColorsArray(color);

    if (colors) {
      this.donutChartOptions2 = {
        series: [35, 80],
        chart: {
          type: 'donut',
          height: 110,
        },
        colors: colors,
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        }
      };
    }
  }
  private initializeDonutChartOptions3(color: string): void {
    const colors = this.getChartColorsArray(color);

    if (colors) {
      this.donutChartOptions3 = {
        series: [70, 30],
        chart: {
          type: 'donut',
          height: 110,
        },
        colors: colors,
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        }
      };
    }
  }

  private initializeStructureWidget(color: string): void {
    const colors = this.getChartColorsArray(color);

    if (colors) {
      this.structureWidget = {
        chart: {
          height: 300,
          type: 'donut',
        },
        series: [40, 18, 13],
        labels: ["Invoiced", "Collected", "Outstanding"],
        colors: colors,
        plotOptions: {
          pie: {
            startAngle: 25,
            donut: {
              size: '78%',
            }
          }
        },

        legend: {
          show: false,
        },

        dataLabels: {
          style: {
            fontSize: '11px',
            fontFamily: 'DM Sans,sans-serif',
            colors: undefined
          },

          background: {
            enabled: true,
            foreColor: '#fff',
            padding: 4,
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#fff',
            opacity: 1,
          },
        },
        responsive: [{
          breakpoint: 600,
          options: {
            chart: {
              height: 240
            },
            legend: {
              show: false
            },
          }
        }]
      }
    }
  }
  private initializeAreaChart(color: string): void {
    const colors = this.getChartColorsArray(color);

    if (colors) {
      this.areaChartOptions = {
        chart: {
          type: 'area',
          height: 341,
          toolbar: {
            show: false
          }
        },
        series: [
          {
            name: 'Received Amount',
            data: [0, 20, 35, 45, 35, 55, 65, 50, 65, 75, 60, 75]
          },
          {
            name: 'Due Amount',
            data: [15, 9, 17, 32, 25, 68, 80, 68, 84, 94, 74, 62]
          }
        ],
        stroke: {
          curve: 'smooth',
          width: [3.5, 3.5]
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          }
        },
        colors: colors,
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        legend: {
          show: false
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [30, 100, 100, 100]
          }
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function () {
                return '';
              }
            }
          },
          marker: {
            show: false
          }
        }
      };
    }
  }

  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
        if (color) {
          color = color.replace(" ", "");
          return color;
        }
        else return newValue;;
      } else {
        var val = value.split(',');
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }

}
