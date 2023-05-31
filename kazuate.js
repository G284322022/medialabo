// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b = document.querySelector('#print');
b.addEventListener('click',hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  kaisu = kaisu + 1;
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = document.querySelector('input[name="number"]');
  let number = yoso.value;
  let s1 = document.querySelector('span#kaisu');
  s1.textContent = kaisu;
  let s2 = document.querySelector('span#answer');
  s2.textContent = number;
  p1 = document.querySelector('p#result');
  number = Number(number);
   console.log(kaisu + '回目の予想' + number);
  if (kaisu > 3) {
    p1.textContent = '答えは ' + kotae + ' でした. すでにゲームは終わっています';
  } else {
    if (kotae == number) {
      p1.textContent = '正解です.おめでとう！';
    } else if (kotae > number) {
      p1.textContent = 'まちがい. 答えはもっと大きいですよ'; 
    } else {
      p1.textContent = 'まちがい. 答えはもっと小さいですよ';
    }
  }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}