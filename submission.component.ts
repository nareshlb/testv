import { Component } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html'
})
export class SubmissionComponent {
  showProperties = false;

  submission = {
    name: 'Cancer Drug Trial A',
    country: 'USA',
    applicationType: 'Type A',
    submissionType: 'Initial',
    submissionSubType: 'New Chemical Entity',
    dossierName: 'Dossier-001',
    status: 'In Progress',
    version: 'v1.0',
    updatedBy: 'Admin',
    updatedOn: '2025-06-01',
    dueDate: '2025-06-30',
    description: 'Initial submission of Cancer Drug Trial A.'
  };

  propertyList = [
    { label: 'Product', key: 'name' },
    { label: 'Country', key: 'country' },
    { label: 'Application Type', key: 'applicationType' },
    { label: 'Submission Type', key: 'submissionType' },
    { label: 'Submission Sub Type', key: 'submissionSubType' },
    { label: 'Dossier Name', key: 'dossierName' },
    { label: 'Status', key: 'status' },
    { label: 'Version', key: 'version' },
    { label: 'Updated By', key: 'updatedBy' },
    { label: 'Updated On', key: 'updatedOn' },
    { label: 'Due Date', key: 'dueDate' },
    { label: 'Description', key: 'description' }
  ];

  openProperties() {
    this.showProperties = true;
  }

  closeProperties() {
    this.showProperties = false;
  }
}





Notes:
You can use FormsModule to enable ngModel. Be sure to import it in your module:

ts

import { FormsModule } from '@angular/forms';


