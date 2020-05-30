import { Component, OnInit } from '@angular/core';
import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-user',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  public emailChartType: ChartType;
  public emailChartData: any;
  public emailChartLegendItems: LegendItem[];

  public tableData2: TableData;

  constructor() { }

  ngOnInit() {
    this.emailChartType = ChartType.Pie;
    this.emailChartData = {
      labels: ['62%', '32%'],
      series: [62, 32]
    };
    this.emailChartLegendItems = [
      { title: 'Vendas concluidas', imageClass: 'fa fa-circle text-info' },
      { title: 'Vendas em aberto', imageClass: 'fa fa-circle text-danger' }
    ];

    this.tableData2 = {
      headerRow: [ 'ID', 'Nome',  'Valor Pago', 'Status', '#' ],
      dataRows: [
        ['1', 'Dakota Rice', 'R$36,73', 'A enviar', '' ],
        ['2', 'Minerva Hooper', 'R$23,78', 'Enviado', ''],
        ['3', 'Sage Rodriguez', 'R$56,14', 'Concluido', '' ],
        ['4', 'Philip Chaney', 'R$38,73', 'Concluido', '' ],
        ['5', 'Doris Greene', 'R$63,54', 'Enviado', '', ],
        ['6', 'Mason Porter', 'R$78,61', 'Enviado', '' ]
      ]
    };
  }
}


