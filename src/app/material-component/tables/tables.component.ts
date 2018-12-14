import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  calories: number;
  fat: string;
  carbs: string;
  protien: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Test User 1', calories: 1.0079, fat: '10', carbs: '23',  protien: '23'},
  {position: 1, name: 'Test User 2', calories: 1.0079, fat: '11', carbs: '24',  protien: '25'},
  {position: 1, name: 'Test User 3', calories: 1.0079, fat: '12', carbs: '26',  protien: '27'},
  {position: 1, name: 'Test User 4', calories: 1.0079, fat: '14', carbs: '27',  protien: '29'},
  {position: 1, name: 'Test User 5', calories: 1.0079, fat: '18', carbs: '28',  protien: '31'},
  {position: 1, name: 'Test User 6', calories: 1.0079, fat: '28', carbs: '29',  protien: '34'},
  {position: 1, name: 'Test User 7', calories: 1.0079, fat: '10', carbs: '30',  protien: '67'},
  {position: 1, name: 'Test User 8', calories: 1.0079, fat: '8', carbs: '31',  protien: '98'},
  {position: 1, name: 'Test User 9', calories: 1.0079, fat: '9', carbs: '32',  protien: '120'},
  {position: 1, name: 'Test User 10', calories: 1.0079, fat: '6', carbs: '33',  protien: '3'},
];


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})


export class TablesComponent {
  constructor() { }
  displayedColumns: string[] = ['position', 'name', 'calories', 'fat', 'carbs', 'protien'];
  dataSource = ELEMENT_DATA;

}


