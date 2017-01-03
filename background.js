// コンテキストメニューに "Search Google for "%s"" を追加する
browser.contextMenus.create({    
    id:   'searchGoogleForSelection',
        title:   'Googleで検索(ごめんねBing) "%s"',
      // %s は選択している文字列で置き換わる
        contexts:  ['selection'],
      // 選択しているときのみメニューに表示される
        onclick:  (info,  tab)  =>  {         // クリックのイベント
                 // 新しいタブを開いてGoogleで検索する
                 browser.tabs.create({             url:   'https://www.google.com/search?q='  +  info.selectionText         });     }
});