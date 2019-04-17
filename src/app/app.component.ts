import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nggrid';
  private gridApi;
  private gridColumnApi;
  private colmDfs;
  private sortingOrder;
  constructor(private http: HttpClient) {
    this.colmDfs = [
      {
        headerName: 'Name',
         field :  'Name',
          width: 150,
         sortingOrder: ['asc', 'desc']
      },
      {
        headerName: 'Email',
        field: 'Email',
        width: 120,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: 'Phone',
        field: 'Phone',
        width: 120,
        sortingOrder: ['asc', 'desc']
      },
      {
        headerName: 'Begin',
        field: 'Begin',
        width: 120,
        sortingOrder: ['asc', 'desc']
      }
    ];

  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.http.get('http://localhost:3000/posts')
    .subscribe (data => {
      params.api.setRowData(data);
    });
    /* let dataValue = [{'firstName': 'Manjeet', 'age': 34 }, {'firstName': 'Ankit', 'age': 23 }]*/

  }

}
