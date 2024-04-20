// ページの読み込み完了後に実行する処理
window.onload = function() {
    // ボタン要素を取得
    const button = document.getElementById('btn');

    // ボタンがクリックされたときの処理を定義
    button.addEventListener('click', function() {
        // テキスト要素を取得
        const text = document.getElementById('text');

        // テキストを変更
        text.textContent = 'ボタンをクリックしました';
    });
};
