import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from '@kolkov/ngx-gallery'
import { DeviceInfo, DeviceRequest } from 'src/proto/user.pb'
import { DeviceClient } from 'src/proto/user.pbsc'

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  public deviceRequest = new DeviceRequest()
  public deviceInfo = new DeviceInfo()
  galleryOptions!: NgxGalleryOptions[]
  galleryImages!: NgxGalleryImage[]

  constructor(
    private deviceClient: DeviceClient,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    console.log('device detail')
    this.loadDevice()
    this.galleryOptions = [
      {
        width: '400px',
        height: '400px',
        imagePercent: 100,
        thumbnailsColumns: 6,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false,
      }
    ];
    this.galleryImages = this.getImages();

  }

  getImages(): NgxGalleryImage[] {
    let imagesUrl = []
    for (let number = 0; number < 4; number++) {
      imagesUrl.push({
        small: '/assets/images.jpg',
        medium: '/assets/images.jpg',
        big: '/assets/images.jpg',
      })
    }
    console.log(imagesUrl);
    return imagesUrl
  }

  loadDevice() {
    this.deviceRequest.groupCode = 'stvg'
    this.deviceRequest.deviceCode = this.route.snapshot.paramMap
      .get('code')
      ?.toString()
    console.log('device', this.deviceRequest)
    this.deviceClient.getListInfo(this.deviceRequest).subscribe((res) => {
      this.deviceInfo = res.data![0]
    })
  }
}
