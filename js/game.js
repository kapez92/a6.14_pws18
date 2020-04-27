const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;

function round() {
  // FIXME: надо бы убрать "target" прежде чем искать новый
  $(".game-field").removeClass("target");

  let divSelector = randomDivId();
  $(divSelector).addClass("target");  //"target"
  $(divSelector).text(hits + 1);
  // TODO: помечать target текущим номером

  // FIXME: тут надо определять при первом клике firstHitTime
 $("button-new").click(myFunction());


//  function addZero(i) {
//   if (i < 10) {
//     i = "0" + i;
//   }
//   return i;
// }

// function myFunction() {
//   var d = new Date();
//   var h = addZero(d.getHours());
//   var m = addZero(d.getMinutes());
//   var s = addZero(d.getSeconds());
//   firstHitTime = h + ":" + m + ":" + s;
// }
function myFunction() {
  if (hits <= 0) {
  var d = new Date();
  var n = d.getTime();
  firstHitTime = n;
  };
} 
//   var d = new Date();
//   var n = d.getTime();
//   firstHitTime = n;
// }
console.log(firstHitTime);

// let diff;
// $( "#button-new" ).click(function( event ) {
//   if ( last ) {
//     diff = event.timeStamp - firstHitTime;
//   }
//   firstHitTime = event.timeStamp;
//   });
  // $(firstHitTime).click();

  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  // FIXME: спрятать игровое поле сначала
  $(".row .col").addClass('d-none');

  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  // FIXME: убирать текст со старых таргетов. Кажется есть .text?
  $(".game-field").text("");

  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    round();
  }
  else ($(event.target).text("промах"));
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
}

function init() {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  $("#button-new").click(function()
    { round();
      $("#button-new").addClass('d-none');
    });
  // round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
