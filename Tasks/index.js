window.onload = () =>{
    //task1
    let div1 = document.querySelector('.div1');
    let button1 = document.querySelector('.button1');
    button1.addEventListener('click',()=>{ div1.innerText = Math.round(Math.random()*100); })

    //task2
    let div2 = document.querySelector('.div2');   
    div2.addEventListener('mousemove',(event)=>{div2.innerHTML='X = '+event.pageX + ', Y = '+event.pageY; })

    //task3
    let button3 = document.querySelector('.button3');
    let div3 = document.querySelector('.div3');
    button3.addEventListener('click', ()=>{div3.hidden =!div3.hidden})

    //task4
    let menuItemHTML = document.querySelector('.menuItemHTML');
    let menuItemCSS = document.querySelector('.menuItemCSS');
    let menuItemJS = document.querySelector('.menuItemJS');
    let contentMenuHTML = document.querySelector('.contentMenuHTML');
    let contentMenuCSS = document.querySelector('.contentMenuCSS');
    let contentMenuJS = document.querySelector('.contentMenuJS');
    menuItemHTML.addEventListener('click', ()=>{         
        contentMenuHTML.hidden=false;
        contentMenuCSS.hidden=true;
        contentMenuJS.hidden=true;
    })
    menuItemCSS.addEventListener('click', ()=>{         
        contentMenuHTML.hidden=true;
        contentMenuCSS.hidden=false;
        contentMenuJS.hidden=true;
    })
    menuItemJS.addEventListener('click', ()=>{         
        contentMenuHTML.hidden=true;
        contentMenuCSS.hidden=true;
        contentMenuJS.hidden=false;
    })


    //task5
    let btnsRemove = document.querySelectorAll('.btnRemove');
    btnsRemove.forEach(btn => btn.addEventListener('click', (event)=>{
        let button = event.target;
        button.parentNode.parentNode.parentNode.removeChild(button.parentNode.parentNode);
    }));

    //task6
    let btnAdd5 = document.querySelector('.btnAdd5');
    let progress = document.querySelector('.progress');
    let progressContainer = document.querySelector('.progressContainer');
    let delta = progressContainer.offsetWidth*0.05;
    btnAdd5.addEventListener('click', ()=>{ 
        if (progress.offsetWidth <= progressContainer.offsetWidth*0.95){
            progress.style.width=progress.offsetWidth+delta+'px';
        }
    })
}