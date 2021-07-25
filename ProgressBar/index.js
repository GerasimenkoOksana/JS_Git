window.onload = ()=>{
  
let bar1 = new ProgressBar.Line(container, {       
    duration: 3000,
    color: '#E9967A',     
    svgStyle: {width: '100%', height: '100%'},
    text: {style: {color: '#000000', position: 'absolute', right: '0', top: '0' }},   
    step: (state, bar1) => {bar1.setText(Math.round(bar1.value() * 100) + ' %'); }
  });  
  bar1.animate(1.0); 

  let bar2 = new ProgressBar.Line(container, {       
    duration: 5000,
    color: '#E9967A',     
    svgStyle: {width: '100%', height: '100%'},
    text: {style: {color: '#000000', position: 'absolute', right: '0', top: '1' }},   
    step: (state, bar2) => {bar2.setText(Math.round(bar2.value() * 100) + ' %'); }
  });  
  bar2.animate(1.0); 
}


