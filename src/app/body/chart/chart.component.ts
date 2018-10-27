import { Component, OnInit } from '@angular/core';
import { GoogleCharts } from 'google-charts';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  f_mobile: boolean = false;
  chartOptions = {
    responsive: true
  };
  chartData: any;
  chartLabels = new Array();
  data = new Array();

  chartDataCR: any;
  chartLabelsCR = new Array();
  dataCR = new Array();

  chartDataPRJ: any;
  chartLabelsPRJ = new Array();
  dataPRJ = new Array();

  chartDataMTC: any;
  chartLabelsMTC = new Array();
  dataMTC = new Array();
  constructor(private services: ServiceService) {
    this.f_mobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.f_mobile = true;
    }
  }

  ngOnInit() {
    this.getDataCharts();
    this.getDataChartByTipePrj();
  }

  getDataCharts() {
    this.services.getData('count_project_by_status').subscribe(response => {
      if (response.status) {
        for (let index = 0; index < response.result.length; index++) {
          if (response.result[index].STATUS) {
            this.chartLabels.push(response.result[index].STATUS);
          } else {
            this.chartLabels.push('Tidak diketahui');
          }
          if (response.result[index].TOTAL) {
            this.data.push(parseInt(response.result[index].TOTAL));
          } else {
            this.data.push(0);
          }

        }
        this.chartData = [{ data: this.data }]
      }
    })
  }

  getDataChartByTipePrj() {
    this.services.getData('chart_by_tipe_project').subscribe(response => {
      if (response.status) {
        for (let index = 0; index < response.result.cr_chart.length; index++) {
          if (response.result.cr_chart[index].STATUS) {
            this.chartLabelsCR.push(response.result.cr_chart[index].STATUS);
          } else {
            this.chartLabelsCR.push('Tidak diketahui');
          }
          if (response.result.cr_chart[index].TOTAL) {
            this.dataCR.push(parseInt(response.result.cr_chart[index].TOTAL));
          } else {
            this.dataCR.push(0);
          }

        }
        this.chartDataCR = [{ data: this.dataCR }]

        for (let index = 0; index < response.result.prj_chart.length; index++) {
          if (response.result.prj_chart[index].STATUS) {
            this.chartLabelsPRJ.push(response.result.prj_chart[index].STATUS);
          } else {
            this.chartLabelsPRJ.push('Tidak diketahui');
          }
          if (response.result.prj_chart[index].TOTAL) {
            this.dataPRJ.push(parseInt(response.result.prj_chart[index].TOTAL));
          } else {
            this.dataPRJ.push(0);
          }

        }
        this.chartDataPRJ = [{ data: this.dataPRJ }]

        for (let index = 0; index < response.result.mt_chart.length; index++) {
          if (response.result.mt_chart[index].STATUS) {
            this.chartLabelsMTC.push(response.result.mt_chart[index].STATUS);
          } else {
            this.chartLabelsMTC.push('Tidak diketahui');
          }
          if (response.result.mt_chart[index].TOTAL) {
            this.dataMTC.push(parseInt(response.result.mt_chart[index].TOTAL));
          } else {
            this.dataMTC.push(0);
          }

        }
        this.chartDataMTC = [{ data: this.dataMTC }]
      }
    })
  }
}
