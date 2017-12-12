import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {BookManageComponent} from './book/book-manage/book-manage.component';
import {StarsComponent} from './stars/stars.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BookFormComponent} from './book/book-form/book-form.component';
import {Book, BookService} from "./book/book.service";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterByNamePipe } from './filter-by-name.pipe';
import {HttpClientModule} from '@angular/common/http';


const routeConfig:Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'book', component: BookManageComponent},
    {path: 'book/:id', component: BookFormComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
        SidebarComponent,
        FooterComponent,
        ContentComponent,
        BookManageComponent,
        StarsComponent,
        DashboardComponent,
        BookFormComponent,
        FilterByNamePipe

    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routeConfig),
        HttpClientModule
    ],
    providers: [BookService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
