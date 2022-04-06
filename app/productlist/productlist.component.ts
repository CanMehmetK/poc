import { Component, OnInit } from '@angular/core';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import {
  TreeGridComponent,
  ColumnChooserService,
  ToolbarService,
} from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  public productListData: object[] = [];
  public pageSettings: PageSettingsModel;
  public toolbar: string[];

  constructor() {}

  ngOnInit() {
    /*
      productCode: Ürün kodu
      productName: Ürün adı ( Ürün grubu yazılabilir. İçecekler vs.. )
      productDescription: Ürün açıklaması
      imagePath: Yüklenen resim yolunu ifade eder. ( Tabloda gösterilmeyecek )
      printer: Mutfağı ifade eder.
      iCollection: ( Tabloda gösterilmeyecek )
      productBarcode: Ürün barkod kodu
      kitchenScreenEnabled: Mutfak ekranı aktif mi?
      qrMenuEnabled: Ürün qr menüde gösterilecek mi?
      isActive: Mevcut olan ürün menüde olacak mı?
      kdvEnabled: Ürüne kdv dahil mi?
      favouriteEnabled: Ürün favori ürün olacak mı?
      productCategoryId: Ürün kategori id'si
      productCategory: Ürün kategorisi
      branchId: Şube id'si
      branch: Şube adı
      productPrice: Ürün fiyatı
      ProductIngredient: Ürünün bileşenleri
    */

    this.productListData = [
      {
        productCode: '2525', // Backend Zorunlu Alan
        productName: 'İçecek', // Backend Zorunlu Alan
        productDescription: 'simple', // Backend Zorunlu Alan
        imagePath: 'simple/test', // Backend Zorunlu Alan
        printer: 'lorem', // Backend Zorunlu Alan
        iCollection: 'lorem', // Backend Zorunlu Alan
        productBarcode: 'simple', // Backend Zorunlu Alan
        kitchenScreenEnabled: 'Aktif', // Backend Zorunlu Alan
        qrMenuEnabled: 'Göster', // Backend Zorunlu Alan
        isActive: 'Aktif', // Backend Zorunlu Alan
        kdvEnabled: 'Aktif', // Backend Zorunlu Alan
        kdvRate: '%18', // Frontend Tarafı için oluşturuldu. Backend tarafında yok.
        portionInformation: '?????', // Frontend tarafı için oluşturuldu. Backend tarafında yok.
        favouriteEnabled: 'Göster', // Backend Zorunlu Alan
        productCategoryId: 'simple', // Backend Zorunlu Alan
        productCategory: 'İçecekler', // Backend Zorunlu Alan
        branchId: 'simple', // Backend Zorunlu Alan
        branch: 'simple', // Backend Zorunlu Alan
        productPrice: '₺ 25', // Backend Zorunlu Alan
        ProductIngredient: 'lorem', // Backend Zorunlu Alan
      },
    ];
    this.pageSettings = { pageSize: 10 };
    this.toolbar = ['ColumnChooser'];
  }
}
