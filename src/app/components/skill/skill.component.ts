import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/backend.service';
import { IProducts } from '../detail';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor( private bs : BackendService) { }

description!: IProducts []

  ngOnInit(): void  {
    this.description = this.bs.getProducts();
  }

}
