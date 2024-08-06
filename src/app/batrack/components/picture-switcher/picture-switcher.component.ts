import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-switcher',
  templateUrl: './picture-switcher.component.html',
  styles: []
})
export class PictureSwitcherComponent {

  folders: { name: string, path: string }[] = [
    { name: 'Tanıtım', path: 'assets/folder1/' },
    //{ name: 'Folder 2', path: 'assets/folder2/' }
  ];

  pictures: string[] = [];
  currentFolder: string = this.folders[0].path;
  currentView: 'grid' | 'list' = 'grid';

  constructor() {
    this.loadPictures(this.currentFolder);
  }

  get currentViewClass(): string {
    return this.currentView === 'grid' ? 'grid-view' : 'list-view';
  }

  setView(view: 'grid' | 'list'): void {
    this.currentView = view;
  }

  changeFolder(folder: string): void {
    this.currentFolder = folder;
    this.loadPictures(folder);
  }

  loadPictures(folder: string): void {
    // You need to have the picture file names in advance or use a service to fetch them
    this.pictures = [
      folder + '@cocsapientis.jpg',
      folder + '@cocsapientis.png',
      folder +'@cocsapientis1.png',
      folder +'@cocsapientis2.png',
      folder +'@cocsapientis5.png',
    ];
  }
}
