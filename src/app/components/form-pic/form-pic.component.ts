import {Component, OnDestroy, OnInit} from '@angular/core';
import { PixabayService } from '../../services/pixabay.service';
import { Hit } from '../../beans/hit';

@Component({
  selector: 'app-form-pic',
  templateUrl: './form-pic.component.html',
  styleUrls: ['./form-pic.component.css']
})
export class FormPicComponent implements OnInit, OnDestroy {

  pics: Hit[] = [];
  currentPage = 1;
  maxItemPerPage = 1;
  keywords: string;
  showLoader = false;
  private keyCurrentPage = 'currentPage';

  constructor(private _pixabayService: PixabayService) { }

  get pagePics() {
    return this.pics.slice((this.currentPage - 1) * this.maxItemPerPage, this.currentPage * this.maxItemPerPage);
  }

  ngOnInit() {
    const currentKeyword = this._pixabayService.currentKeyword;
    if (currentKeyword !== '') {
      this.keywords = currentKeyword;
      this.searchImages(currentKeyword);
    }

    const currentPageFromLS = localStorage.getItem(this.keyCurrentPage);
    this.currentPage = Number(currentPageFromLS) || 1;
  }

  ngOnDestroy() {
    localStorage.setItem(this.keyCurrentPage, String(this.currentPage));
  }

  onSubmit(keywords: string) {
    if (typeof keywords !== 'undefined' && keywords.trim() !== '') {
      this.searchImages(keywords);
    }
  }

  searchImages(keywords: string): void {
    this.currentPage = 1;
    this.showLoader = true;

    this._pixabayService.searchImages(keywords)
      .subscribe(response => {
        this.showLoader = false;
        this.pics = response.hits;
      });
  }
}
