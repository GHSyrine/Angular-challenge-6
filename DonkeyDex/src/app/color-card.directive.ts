import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';


@Directive({
  selector: '[appColorCard]',
  standalone: true
})
export class ColorCardDirective implements OnInit {

@Input() appColorCard : string;
  constructor(private el : ElementRef, private render : Renderer2) { }

  ngOnInit(): void {
    this.changeColor(this.appColorCard);
  }

  private changeColor(type: string){
    let color : string = 'white';
    switch (type){
      case 'fire':
        color='orange';
      break;
      case 'grass':
        color = 'green';
      break;
      case 'electric':
        color = 'yellow';
      break;
      case 'water':
        color ='lightseagreen';
      break;
      case 'bug':
        color ='pink';
      break;
      case 'psychic':
        color ='olive';
      break;
      case 'normal':
        color= 'brown';
      break;
      case 'poison':
        color= 'aquamarine';
      break;
      case 'fighting':
        color = 'golden';
      break;
      case 'ground':
        color='silver';
      break;
    }
    this.el.nativeElement.style.backgroundColor = color;
  }
}
