$(function() {
  $('#back a').on('click',function(event){
    // #back内のaタグがクリックされたときの処理
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

// $('セレクタ名').animate({
//   変化対象のプロパティ名:変化値
// }, アニメーションの動作時間);