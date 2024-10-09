import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  @ViewChild('qc1', { static: false }) qc1!: ElementRef;
  @ViewChild('qc2', { static: false }) qc2!: ElementRef;
  @ViewChild('qc3', { static: false }) qc3!: ElementRef;
  @ViewChild('img1', { static: false }) img1!: ElementRef;
  @ViewChild('img2', { static: false }) img2!: ElementRef;
  @ViewChild('img3', { static: false }) img3!: ElementRef;
  @ViewChild('ans1', { static: false }) ans1!: ElementRef;
  @ViewChild('ans2', { static: false }) ans2!: ElementRef;
  @ViewChild('ans3', { static: false }) ans3!: ElementRef;

  status: any[] = [
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
  ]

  getContainerByValue(value: number): ElementRef {
    const qcMap: { [key: number]: ElementRef } = {
      1: this.qc1,
      2: this.qc2,
      3: this.qc3
    };
    return qcMap[value];
  }

  getImageByValue(value: number): ElementRef {
    const imgMap: { [key: number]: ElementRef} = {
      1: this.img1,
      2: this.img2,
      3: this.img3
    };
    return imgMap[value]
  }

  getAnswerByValue(value: number): ElementRef {
    const ansMap: { [key: number]: ElementRef} = {
      1: this.ans1,
      2: this.ans2,
      3: this.ans3
    };
    return ansMap[value]
  }

  handleMenu(value: number) {
    let isOpen = this.status[value - 1]
    let container = this.getContainerByValue(value)
    container.nativeElement.style.height = isOpen ? '190px' : '50px'
    container.nativeElement.style.backgroundColor = isOpen ? '#f0f0f0' : '#fff'
    this.status[value - 1] = !this.status[value - 1]
    let img = this.getImageByValue(value)
    img.nativeElement.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
    let ans = this.getAnswerByValue(value)
    ans.nativeElement.style.display = isOpen ? 'block' : 'none'

  }
}
