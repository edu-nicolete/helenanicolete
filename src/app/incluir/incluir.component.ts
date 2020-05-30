import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';
import {LegendItem, ChartType} from '../lbd/lbd-chart/lbd-chart.component';
import * as Chartist from 'chartist';

@Component({
    selector: 'app-home',
    templateUrl: './incluir.component.html',
    styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {
    fileData: File = null;
    previewUrl: any = null;
    fileUploadProgress: string = null;
    uploadedFilePath: string = null;
    resumeBook = '';
    titleBook = '';

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    onSubmit() {
        const formData = new FormData();
        formData.append('files', this.fileData);

        this.fileUploadProgress = '0%';

        this.http.post('https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload', formData, {
            reportProgress: true,
            observe: 'events'
        })
            .subscribe(events => {
                if (events.type === HttpEventType.UploadProgress) {
                    this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
                    console.log(this.fileUploadProgress);
                } else if (events.type === HttpEventType.Response) {
                    this.fileUploadProgress = '';
                    console.log(events.body);
                    alert('SUCCESS !!');
                }

            })
    }

    fileProgress(fileInput: any) {
        console.log('fileInput', fileInput);
        this.fileData = <File>fileInput.target.files[0];
        this.preview();
    }

    preview() {
        // Show preview
        if (this.fileData) {
            const mimeType = this.fileData.type;
            if (mimeType.match(/image\/*/) == null) {
                return;
            }
        }

        const reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = (_event) => {
            this.previewUrl = reader.result;
        }
    }

    clear() {
        this.resumeBook = '';
        this.previewUrl = null;
        this.titleBook = '';
        this.fileData = null;
        this.previewUrl = null;
        this.fileUploadProgress = null;
        this.uploadedFilePath = null;
    }

    // onSubmit() {
    //     const formData = new FormData();
    //     formData.append('file', this.fileData);
    //     this.http.post('url/to/your/api', formData)
    //         .subscribe(res => {
    //             console.log(res);
    //             this.uploadedFilePath = res.data.filePath;
    //             alert('SUCCESS !!');
    //         })
    // }
}
