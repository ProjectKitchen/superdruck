import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationsComponent } from "./components/reservations/reservations.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {AllReservationsComponent} from "./components/all-reservations/all-reservations.component";
import {AdminComponent} from "./components/admin/admin.component";
import {ResourceCalendarComponent} from "./components/calendar/resource-calendar/resource-calendar.component";


const routes: Routes = [
    {path: 'calendar', component: CalendarComponent},
    {path: 'calendar/:id', component: ResourceCalendarComponent},
    {path: 'reservations', component: ReservationsComponent},
    {path: 'all-reservations', component: AllReservationsComponent},
    {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
