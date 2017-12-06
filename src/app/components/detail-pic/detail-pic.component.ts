import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PixabayService } from '../../services/pixabay.service';
import { Hit } from '../../beans/hit';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-detail-pic',
  templateUrl: './detail-pic.component.html',
  styleUrls: ['./detail-pic.component.css']
})
export class DetailPicComponent implements OnInit {

  hit: Hit;
  tags: string[] = [];

  constructor(private _route: ActivatedRoute, private _location: Location,
              private _pixabayService: PixabayService) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    if (typeof id !== 'undefined') {
      this.getImage(Number(id));
    }
  }

  goBack() {
    this._location.back();
  }

  getImage(id: number) {
    if (!Number.isNaN(id)) {
      this._pixabayService.getImage(id).subscribe(response => {
        this.hit = response;
        this.tags = response.tags.split(' ');
      });
    } else {
      this.goBack();
    }
  }
}
