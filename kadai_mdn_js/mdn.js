// 日付を取得する
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth()+1;
const date = today.getDate();

// コンソールに出力する
console.log(year + '年' + month + '月' + date + '日');
