import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-for-block',
  standalone: true,
  imports: [],
  templateUrl: './for-block.component.html',
  styleUrl: './for-block.component.css'
})
export class ForBlockComponent {
  items: Item[] = [{id: 101, name: "Pen"}, 
    {id: 102, name: "Ink"}, 
    {id: 103, name: "Pencil"}];
  // items: Item[] = [];
}
