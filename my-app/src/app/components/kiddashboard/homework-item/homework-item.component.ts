
import { Component, OnInit, Input } from '@angular/core';
import { Homework } from 'src/app/shared/models/homework.model';
import { HomeworkService } from 'src/app/shared/services/homework.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homework-item',
  templateUrl: './homework-item.component.html',
  styleUrls: ['./homework-item.component.css']
})
export class HomeworkItemComponent implements OnInit {

  @Input() homework: Homework = new Homework();

  constructor(private HomeworkService: HomeworkService, private Router: Router) { }

  ngOnInit() {
  }
}




