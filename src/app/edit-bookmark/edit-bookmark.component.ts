import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookmarkService } from '../shared/bookmark.service';
import { Bookmark } from '../shared/bookmark.model';
import { Router, ActivatedRoute, ParamMap } from '../../../node_modules/@angular/router';
import { NotificationService } from '../shared/notification.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss']
})
export class EditBookmarkComponent implements OnInit {

  bookmark: Bookmark

  constructor(
    private bookmarkService: BookmarkService, 
    private router: Router, 
    private route: ActivatedRoute,
    private notificationService: NotificationService)  { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) =>{
      const bookmarkId = paramMap.get('id')
      this.bookmark = this.bookmarkService.getBookmark(bookmarkId)
    })
  }

  onFormSubmit(form: NgForm) {
    const { name, url } = form.value
    this.bookmarkService.updateBookmark(this.bookmark.id, {
      name,
      url: new URL(url)
    })

    this.notificationService.show('Bookmark updated!')
  
  }

  delete() {
    this.bookmarkService.deletebookmark(this.bookmark.id)
     this.router.navigate(['../'], { relativeTo: this.route})
  }

}
