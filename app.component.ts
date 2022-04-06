import { Component, OnInit } from '@angular/core';
import {
  TreeGridComponent,
  PageService,
  ColumnChooserService,
  ToolbarService,
} from '@syncfusion/ej2-angular-treegrid';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [PageService, ColumnChooserService, ToolbarService],
})
export class AppComponent {
  ngOnInit(): void {}
}
