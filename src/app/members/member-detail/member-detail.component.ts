import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from '@kolkov/ngx-gallery'
import { DevicesService } from 'src/app/_services/devices.service'
import { DeviceInfo, DeviceRequest } from 'src/proto/user.pb'
import { DeviceClient } from 'src/proto/user.pbsc'

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  public deviceInfo = new DeviceInfo()
  galleryOptions!: NgxGalleryOptions[]
  galleryImages!: NgxGalleryImage[]

  constructor(
    private deviceService: DevicesService,
    private route: ActivatedRoute,
    private router: Router
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
      },
    ]
    this.galleryImages = this.getImages()
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
    console.log(imagesUrl)
    return imagesUrl
  }

  loadDevice() {
    const code = this.route.snapshot.paramMap.get('code')?.toString()
    if (code) {
      this.deviceInfo = this.deviceService.getDevice(code);
    } else {
      this.router.navigateByUrl('members');
    }
  }
}
