import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  inputFieldValue: string = '';
  inputFieldValue2: string = '';
  inputFieldValue3: string = '';
  submittedData: { name: string, email: string, mobile: string }[] = [];

  submitForm() {
    // Push submitted data to the array
    this.submittedData.push({ name: this.inputFieldValue, email: this.inputFieldValue2, mobile: this.inputFieldValue3 });
    
    // Clear input fields after submission
    this.inputFieldValue = '';
    this.inputFieldValue2 = '';
    this.inputFieldValue3 = '';
  }

  editData(index: number) {
    // Assuming you have a separate form for editing, you can populate it with data of the selected item for editing
    this.inputFieldValue = this.submittedData[index].name;
    this.inputFieldValue2 = this.submittedData[index].email;
    this.inputFieldValue3 = this.submittedData[index].mobile;

    // Optionally, you can remove the item from the array after populating the form
    // this.submittedData.splice(index, 1);
  }

  deleteData(index: number) {
    // Remove the item from the array
    this.submittedData.splice(index, 1);
  }
}