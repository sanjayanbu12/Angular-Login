import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
    // Prompt the user for new values
    const newData = this.submittedData[index];
    const editedName = prompt('Enter new name:', newData.name);
    const editedEmail = prompt('Enter new email:', newData.email);
    const editedMobile = prompt('Enter new mobile:', newData.mobile);

    // Update the data directly in the array if new values are provided
    if (editedName !== null && editedEmail !== null && editedMobile !== null) {
      this.submittedData[index] = {
        name: editedName,
        email: editedEmail,
        mobile: editedMobile
      };
    }
  }

  deleteData(index: number) {
    // Remove the item from the array
    this.submittedData.splice(index, 1);
  }
}
