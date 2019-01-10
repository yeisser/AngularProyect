import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular CRUD';
  msg: string = '';

  employees = [
    { 'name': 'Yeisser', position: 'Quality Assensure', email: 'yeisser@gmail.com' },
    { 'name': 'Junior', position: 'IT Manager', email: 'yeisly@gmail.com' },
    { 'name': 'Billy', position: 'Cirujano Dentista', email: 'yeisbeth@gmail.com' },
    { 'name': 'Sandro', position: 'Tec. en Tubos', email: 'smith@gmail.com' }
  ];

  model: any = {};
  model2: any = {};
  hideUpdate:boolean=true;
  
  addEmployee(): void {
    this.employees.push(this.model);
    this.msg = 'Campo Agregado';
  }
  deleteEmployee(i): void {
    var answer = confirm('Estas seguro de querer eliminarlo?');
    if (answer) {
      this.employees.splice(i, 1);
      this.msg = 'Dato Eliminado';
    }
  }

  myValue;
  editEmployee(i): void {
    this.hideUpdate=false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }
  updateEmployee(): void {
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i == j) {
        this.employees[i] = this.model2;
        this.msg = 'Campo Actualizado';
        this.model2 = {};
      }
    }
  }
  closeAlert():void{
    this.msg='';
  }
}
