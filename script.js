// 宣告變數 title、content、btn 和 list
var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("btn");
var list = document.getElementById("list");

// 使用 addEventListener 函式為按鈕 btn 添加一個 "click" 事件的監聽器。

btn.addEventListener("click", function() {

    // 在按鈕點擊時，將新的文章以 HTML 字符串的形式追加到 list 容器中。
    list.innerHTML =
        list.innerHTML +
        `
      <div class="article">
        <h2>${title.value}</h2>
        <p>${content.value}</p>
      </div>
    `;

    // 將輸入框的值清空，以便用戶輸入新的文章內容。

    title.value = "";
    content.value = "";
});