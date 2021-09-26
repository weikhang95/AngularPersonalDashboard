import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark.model';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarks: Bookmark[]

  constructor() { }

  getBookmarks() {
    return this.bookmarks;
  }

  getBookmark(id: string) {
    return this.bookmarks.find(b => b.id === id)
  }

  addBoomark(bookmark: Bookmark) {
    this.bookmarks.push(bookmark)
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id)
    Object.assign(bookmark, updatedFields)
  }

  deletebookmark(id:string) {
    const bookmarkIndex = this.bookmarks.findIndex(b => b.id === id)
    if (bookmarkIndex == -1) return     // bookmark not found
    this.bookmarks.splice(bookmarkIndex, 1)
  }
}
