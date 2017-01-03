// コンテキストメニューに "Search Google for "%s"" を追加する
chrome.contextMenus.create({
    id: 'searchGoogleForSelection',
    title: 'Search Google for "%s"', // %s は選択している文字列で置き換わる
    contexts: ['selection'], // 選択しているときのみメニューに表示される
    onclick: (info, tab) => {
        // クリックのイベント
        // 新しいタブを開いてGoogleで検索する
        chrome.tabs.create({
            url: 'https://www.google.com/search?q=' + info.selectionText
        });
    }
});