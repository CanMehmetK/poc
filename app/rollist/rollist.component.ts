import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-rollist',
  templateUrl: './rollist.component.html',
  styleUrls: ['./rollist.component.css'],
})
export class RollistComponent implements OnInit {
  public rolListData: Object[] = [];
  public pageSettings: PageSettingsModel;
  public toolbar: string[];
  constructor() {}

  ngOnInit() {
    /*
    
      rolId: Rol id'si
      rolName: Rol adı ( Admin )
      rolDescription: rol açıklaması ( Garson, şef garson, kasiyer vs.. )
      rolPermissions: Rolün yetkisi ( Mutfak, Salon, Kasa vs.. )
      rolStatus: rol durumu. (aktif mi pasif mi?)
    
    */
    this.rolListData = [
      {
        rolId: '2525', // Backend Zorunlu Alan
        rolName: 'Admin', // Backend, Zorunlu Alan.
        rolDescription: 'Garson', // Backend, Frontend Zorunlu Alan.
        rolPermissions: 'Mutfak', // Backend, Frontend Zorunlu Alan.
        rolStatus: 'Aktif', // Frontend Default.
      },
    ];
    this.pageSettings = { pageSize: 10 };
    this.toolbar = ['ColumnChooser'];
  }
}
