// ボタンの要素を取得する
const pushBtn = document.getElementById('btn');
// テキストの要素を取得する
const newText = document.getElementById('text');

// イベント処理
pushBtn.addEventListener('click', () => {
    // テキストを変更する
    newText.textContent = 'ボタンをクリックしました';
})