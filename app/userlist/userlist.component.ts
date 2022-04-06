import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  public userListData: Object[] = [];
  public pageSettings: PageSettingsModel;
  public toolbar: string[];
  constructor() {}

  ngOnInit() {
    /*
      userId: Kullanıcı ID
      userName: kULLANICI Adı
      userFirstName: Ad 
      userLastName: Soy ad
      userEmail: Kullanıcı e-mail
      emailConfirmed: E-mail doğrulama alanı
      userDescription: Kullanıcı ile ilgili açıklama alanı
      userlPermissions: Kullanıcı izinleri
      phoneNumber: Telefon Numarası
      date: İşe giriş tarihi yazılacak.
      status: Kullanıcı durumu. Aktif ve pasif seçeneği ile çalışıp çalışmadığı konttrolü sağlanacak.
      imageUrl: yüklenene resmin url bilgisinin yazılacağı alan.
      tenantId: Kullanıcıya verilen benzersiz kimlik.
    */

    this.userListData = [
      {
        userId: '1212', // Backend Zorunlu alan. Kullanıcı ID
        userName: 'Onur Terzioğlu', // Backend Zorunlu alan. Kullanıcı Adı
        userFirstName: '', // Backend Zorunlu Alan.
        userLastName: '', // Backend Zorunlu Alan.
        userEmail: 'test@deneme.com', // Backend Zorunlu Alan
        emailConfirmed: 'test@deneme.com', // Backend Zorunlu Alan. E-mail doğrulama.
        userDescription: 'Bahçelievler', // Frontend Default. Kullanıcı açıklama.
        userlPermissions: 'Admin', // Frontend Default. Kullanıcı izinleri.
        phoneNumber: '0536 141 1414', // Frontend Default.
        date: '01.01.2020', // Frontend Default. İşe giriş tarihi.
        status: 'Aktif', // Bakend Zorunlu Alan. Kullanıcı aktif çalışan mı?
        imageUrl: 'https://lipsum.com', // Backend Zorunlu Alan.
        tenantId: '2525', // Backend Zorunlu Alan. İlk kayıtta verilen benzersiz kimlik.
      },
    ];
    this.pageSettings = { pageSize: 10 };
    this.toolbar = ['ColumnChooser'];
  }
}
