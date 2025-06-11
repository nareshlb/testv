import { Component } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
})
export class SubmissionComponent {
  showPopup = false;

  // Editable fields
  status = '';
  dueDate = '';
  description = '';

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  saveChanges() {
    console.log('Saved:', {
      status: this.status,
      dueDate: this.dueDate,
      description: this.description
    });
    this.togglePopup();
  }
}







Make sure to import FormsModule in your app.module.ts to use [(ngModel)]:


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SubmissionComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [SubmissionComponent]
})
export class AppModule { }
