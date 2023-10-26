import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  tuiIconsPathFactory,
  TUI_ICONS_PATH,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MyComponent } from 'src/components/taigaUi/taiga.mycomponent';
import { ProductComponent } from 'src/components/product/product.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiCheckboxLabeledModule } from '@taiga-ui/kit';
import { TuiLinkModule } from '@taiga-ui/core';
import { TuiFieldErrorPipeModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [AppComponent, ProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiCheckboxLabeledModule,
    TuiLinkModule,
    TuiFieldErrorPipeModule,
  ],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: tuiIconsPathFactory('assets/taiga-ui/icons/'),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
