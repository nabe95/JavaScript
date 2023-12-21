// ジャンケンの入力
let user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
// グー・チョキ・パー以外の文字列が入力されたときに、「グー・チョキ・パーのいずれかを入力してください」とアラートウィンドウにエラーが表示
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  // アラートウィンドウでエラーが表示された後、もう一度、プロンプト入力欄が表示されて入力できる
  user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。');
}

// ランダムでジャンケンの手を決める関数
let js_hand = getJShand();

// ユーザーとJavaScriptのジャンケンの手を比べる関数
let judge = winLose(user_hand, js_hand);

// 結果の表示
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

// ランダムでジャンケンの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}