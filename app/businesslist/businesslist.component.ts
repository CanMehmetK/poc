import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-businesslist',
  templateUrl: './businesslist.component.html',
  styleUrls: ['./businesslist.component.css'],
})
export class BusinesslistComponent implements OnInit {
  public data: Object[] = [];
  public pageSettings: PageSettingsModel;
  public toolbar: string[];

  constructor() {}

  ngOnInit() {
    /* 
        City: Şehir
        Phone: Telefon
        businessType: İşletme Türü. ( Frontend Opsiyonel )
        Status: Durum. ( İşletme Aktif / Pasif )
        Title: Admin. ( Kullanıcı Rolü yazılabilir )
        cellPhone: Mobil Telefon
        mail: E-mail adresi
        tenantId: İşletme ilk demoyu kullanırken verilen benzersiz kimliği ifade eder.
        parentId: tenantId'ye bağlı olarak alt başka şubeyi ifade eder.
        name: İsim Soyisim kapsar
        firstName: Ön ad
        lastName: Soyisim
        country: Ülke
        posQuantity: POS Sayısı
        branchQuantity: Şube Sayısı
        language: Dil tercihi
        currency: Para Birimi
        password: Şifre
    */

    this.data = [
      {
        city: 'Istanbul',
        phone: '0212 525 1285',
        businessType: 'Restaurant', // Frontend tarafından tanımlandı. Backend tarafında yok.
        status: 'active',
        title: 'Kafkas Restaurant',
        cellPhone: '0536 741 4145',
        mail: 'test@deneme.com',
        tenantId: 'Kiracı',
        parentId: 'Yeni Tablo',
        name: 'Ali Yılmaz',
        firstName: '',
        lastName: '',
        country: 'Turkey',
        posQuantity: 25,
        branchQuantity: 2,
        language: 'Turkish',
        currency: 'TL',
        password: '*****',
      },
    ];
    this.pageSettings = { pageSize: 10 };
    this.toolbar = ['ColumnChooser'];
  }
}
