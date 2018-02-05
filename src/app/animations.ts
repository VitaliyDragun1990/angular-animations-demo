import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';

/************ RE-USABLE ANIMATIONS ***********************/

export let bounceOutLeftAnimation = animation(
  animate('0.5s ease-out',
    keyframes([
      style({
        offset: .4,
        opacity: 1,
        transform: 'translateX(20px)'
      }),
      style({
        offset: 1,
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
    ]))
);

export let fadeInAnimation = animation([
  style({opacity: 0}),
  animate('{{ duration }} {{ easing }}')
], {
  params: {
    duration: '2s',
    easing: 'ease-out'
  }
});

export let fadeOutAnimation = animation([
  animate('{{ duration }}', style({opacity: 0}))
], {
  params: { duration: '2s' }
});

/************ RE-USABLE TRIGGERS ***********************/

export let slide = trigger('slide', [

  transition(':enter', [
    style({transform: 'translateX(-10px)'}),
    animate(500)
  ]),

  transition(':leave', useAnimation(bounceOutLeftAnimation))
]);

export let fade = trigger('fade', [

  state('void', style({opacity: 0})),

  transition(':enter', useAnimation(fadeInAnimation)),

  transition(':leave', useAnimation(fadeOutAnimation)),
]);
