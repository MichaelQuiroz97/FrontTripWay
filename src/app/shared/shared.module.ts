import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { DatePipe } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatDialog } from '@angular/material/dialog';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule, MatPaginator, MatPaginatorModule,
    MatIconModule, MatTooltipModule, MatButtonModule, MatToolbarModule, BrowserAnimationsModule,
    RouterModule, MatMenuModule,DatePipe,MatSlideToggleModule, MatCardModule,
    MatGridListModule, MatSelectModule, MatDatepickerModule, MatSnackBarModule, 
    MatListModule, MatDividerModule, MatCheckboxModule, ReactiveFormsModule, MatProgressSpinnerModule, MatNativeDateModule,
    MatDialogModule, ReactiveFormsModule, FormsModule, MatRadioModule
  ],
  exports: [
    CommonModule, MatTableModule, MatInputModule,MatFormFieldModule, MatPaginator, MatPaginatorModule,
    MatIconModule, MatTooltipModule, MatButtonModule, MatToolbarModule, BrowserAnimationsModule,
    RouterModule, MatMenuModule,DatePipe,MatSlideToggleModule, MatCardModule,
    MatGridListModule, MatSelectModule, MatDatepickerModule, MatSnackBarModule, 
    MatListModule, MatDividerModule, MatCheckboxModule, ReactiveFormsModule, MatProgressSpinnerModule,MatNativeDateModule,
    MatDialogModule, ReactiveFormsModule, FormsModule, MatRadioModule
  ]
})
export class SharedModule { }
