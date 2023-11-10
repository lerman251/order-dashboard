import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ZingchartAngularModule } from 'zingchart-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { FirstFiveOrdersComponent } from './first-five-orders/first-five-orders.component';
import { AllOtherOrdersComponent } from './all-other-orders/all-other-orders.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderDashboardComponent,
    FirstFiveOrdersComponent,
    AllOtherOrdersComponent,
  ],
  imports: [
    BrowserModule,
    ZingchartAngularModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
