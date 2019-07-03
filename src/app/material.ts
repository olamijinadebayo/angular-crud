import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatTableModule, MatInputModule, MatCardModule, MatGridListModule } from '@angular/material';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatTableModule, MatInputModule, MatCardModule, MatGridListModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatTableModule, MatInputModule, MatCardModule, MatGridListModule],
})
export class MaterialModule { }
