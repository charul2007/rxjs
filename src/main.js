const $ = require('jquery');
const Rx = require('rxjs/Rx');

let btn = $('#btn');
let input = $('#input');
let numbers = [1, 2, 3, 4, 5];
let posts = [
  {title: 'Post One', body: 'I am the body'},
  {title: 'Post Two', body: 'I am the body'},
  {title: 'Post Three', body: 'I am the body'}
];

let btnStream$ = Rx.Observable.fromEvent(btn, 'click');
let inputStream$ = Rx.Observable.fromEvent(input, 'keyup');
let numberStream$ = Rx.Observable.from(numbers);
let postStream$ = Rx.Observable.from(posts);

btnStream$.subscribe(
  function (e) {
    console.log('clicked');
  },
  function (err) {
    console.log(err);
  },
  function (completed) {
    console.log('completed');
  }
);

inputStream$.subscribe(
  function (e) {
    console.log(e.target.value);
  },
  function (err) {
    console.log(err);
  },
  function (completed) {
    console.log('completed');
  }
);

numberStream$.subscribe(n => {
    console.log(n);
  },
  err => {
    console.log(err);
  },
  completed => {
    console.log('completed');
  }
)

postStream$.subscribe(
  posts => {
    console.log(posts);
  },
  err => {
    console.log(err);
  },
  completed => {
    console.log('completed');
  }
)
