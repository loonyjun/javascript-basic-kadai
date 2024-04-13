//リストの中身を先頭から全て取り出して、出力結果が以下のようになるプログラムを、
//for文を利用した場合と
//while文を利用した場合の2つの繰り返し処理を両方記述してください
//holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日",
//"みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

let holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]
console.log(holidays);

// for文を使用した繰り返し処理
for(let holiday in holidays){
    console.log(holidays[holiday]);
}

// while文を使用
let index = 0;
while(holidays[index] !== undefined){
    console.log(holidays[index]);
    index++;
}
