window.onload = () => {
    //task1
    let btnUp = document.querySelector('.btnUp');
    let btnDown = document.querySelector('.btnDown');    
    let counter= document.querySelector('.count');
    localStorage.count =0;
    btnUp.addEventListener('click',()=>{counter.textContent= localStorage.count++;  });
    btnDown.addEventListener('click',()=>{counter.textContent= localStorage.count--;  });

    //task2
    let colors = ['blue','green','red','yellow','orange','pink', 'brown', 'navy', 'olive','purple','white'];
    let btnAddBlock = document.querySelector('.btnAddBlock');
    btnAddBlock.addEventListener('click',addBlock);
    function addBlock(){
        let block = document.createElement('div');
        block.className = "colorBlock";
        block.style.background = colors[Math.floor(Math.random()*colors.length)];
        block.addEventListener('click',removeBlock);
        let blocks = document.querySelector('.container2');
        blocks.append(block);
    }
    let allBlocks = document.querySelectorAll('.colorBlock');
    allBlocks.forEach(block => block.addEventListener('click',removeBlock));
    function removeBlock(){
        let block = this;
        block.remove();
    }
    

    //task3
    let textBlock = document.querySelector('.text');  
    let colorsText = document.querySelectorAll('.colorForText');    
    colorsText.forEach(element => element.addEventListener('click',changeColor));  
    function changeColor(){
        let colorText = window.getComputedStyle(this).backgroundColor;
        textBlock.style.color = colorText;
    }

    //task4
    let btnAddComment = document.querySelector('.btnAddComment');
    btnAddComment.addEventListener('click',addComment);
    function addComment(){
        let authorName = document.querySelector('.nameAuthor').value;
        let newComment = document.querySelector('.newComment').value;
        if (authorName!="" && newComment!=""){
            let divComment = document.createElement('div');
            let commentAuthor = document.createElement('div');
            commentAuthor.className = "author";
            commentAuthor.textContent = authorName;
            let commentDate = document.createElement('div');
            commentDate.className = "date";
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); 
            let yyyy = today.getFullYear();
            today = mm + '.' + dd + '.' + yyyy;
            commentDate.textContent = today;
            let commentText = document.createElement('div');
            commentText.className = "text4";
            commentText.textContent = newComment;
            divComment.append(commentAuthor, commentDate, commentText);
            let firstComment = document.querySelector('.comment');
            let container4 = document.querySelector('.container4');
            container4.insertBefore(divComment, firstComment);
            document.querySelector('.nameAuthor').value = "";
            document.querySelector('.newComment').value = "";
        }
    }

}