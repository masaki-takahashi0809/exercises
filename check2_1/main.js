document.addEventListener('DOMContentLoaded', function() {
    // addTodoBtnの要素を取得してください。
    const addTodoBtn = document.getElementById('addTodoBtn');

    // 追加ボタンが押下されたときのイベントを追加してください
    addTodoBtn.addEventListener('click',function(){
        const todoInput = document.getElementById('todoInput');
        const todoText = todoInput.ariaValueMax.trim();

        // その関数の中で以下の処理を追加してください
    //      処理1、inputが空になっていたら、alert()処理をして処理を終わらせてください。
    //            メッセージは"ToDoを入力してください"を出力してください                  
    //      処理2、todoItem内に入力された文字が追加されるようにしてください。

        if(todoText === ''){
            alert('Todoを入力してください');
            return;
    



    };
    

})