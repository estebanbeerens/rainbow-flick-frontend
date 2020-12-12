import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UploaderService } from 'src/app/services/uploader.service';

@Component({
  selector: 'app-shared-image-upload',
  templateUrl: './shared-image-upload.component.html',
  styleUrls: ['./shared-image-upload.component.scss']
})
export class SharedImageUploadComponent implements OnInit {
  
  progress: number;
  infoMessage: any;
  isUploading: boolean = false;
  file: File;
  fileName: string = "No file selected";

  @Input() imageUrl: string | ArrayBuffer;
  @Output() fileChanged = new EventEmitter<File>();

  constructor(private uploader: UploaderService) {}

  ngOnInit() {
    this.uploader.progressSource.subscribe(progress => {
      this.progress = progress;
    });
  }

  onChange(file: File) {
    if (file) {
      this.fileName = file.name;
      this.file = file;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = event => {
        this.imageUrl = reader.result;
      };

      this.fileChanged.emit(file);
    }
  }

  onUpload() {
    this.infoMessage = null;
    this.progress = 0;
    this.isUploading = true;

    this.uploader.upload(this.file).subscribe(message => {
      this.isUploading = false;
      this.infoMessage = message;
    });
  }

}
