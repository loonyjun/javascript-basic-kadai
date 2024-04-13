// 今日の日付を取得
const date = new Date();

// Date オブジェクトを生成するいくつかの方法
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#date_%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B%E3%81%84%E3%81%8F%E3%81%A4%E3%81%8B%E3%81%AE%E6%96%B9%E6%B3%95


// 年、月、日を取得
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date#%E5%B9%B4%E6%9C%88%E6%97%A5%E3%82%84%E6%99%82%E5%88%BB%E3%81%AE%E5%8F%96%E5%BE%97

const [month, day, year] = [
    date.getMonth() +1,
    date.getDate(),
    date.getFullYear(),
  ];


// 日付を指定された形式で表示
console.log(`${year}年${month}月${day}日`);
