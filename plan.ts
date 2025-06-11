import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  selectedTab = 'Plan';

  permissions = {
    plan: true,
    build: true,
    publish: true,
  };

  users = ['Sophia', 'Alex', 'John', 'Naresh'];

  sections = [
    {
      id: 1,
      title: 'Medical Device User Fee Cover Sheet',
      status: 50,
      dueDate: '2025-05-10',
      assignedTo: 'Sophia',
      hover: false,
      showMenu: false,
    },
    {
      id: 2,
      title: '510(k) Cover Letter',
      status: 100,
      dueDate: '',
      assignedTo: '',
      hover: false,
      showMenu: false,
    },
  ];

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  openMenu(section: any) {
    section.showMenu = !section.showMenu;
  }

  addSubsection(section: any) {
    alert(`Add subsection to ${section.title}`);
  }

  renameSection(section: any) {
    const newTitle = prompt('Enter new title', section.title);
    if (newTitle) section.title = newTitle;
  }

  deleteSection(section: any) {
    if (confirm(`Delete section "${section.title}"?`)) {
      this.sections = this.sections.filter(s => s.id !== section.id);
    }
  }
}





app.module.ts (Imports)


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





