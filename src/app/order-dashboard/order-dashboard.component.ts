import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})

export class OrderDashboardComponent {
  orders: number[] = [];
  private orderNumber = 1;
  private isWorkday = false;
  private orderInterval?: number;

  ngOnInit() {}

  startWorkday() {
    this.isWorkday = true;
    this.orderInterval = setInterval(() => {
      this.orders.push(this.orderNumber++);
    }, 2000);
  }

  endWorkday() {
    this.isWorkday = false;
    if (this.orderInterval) {
      clearInterval(this.orderInterval);
    }
  }
}