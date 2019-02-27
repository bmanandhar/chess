console.log("Sanitation");
$(document).ready(function(){
  let
    col='ABCDEFGH'.split('');
    row='12345678'.split('');
    
    men_white=['men/wP.png','men/wR.png','men/wN.png','men/wB.png','men/wK.png','men/wQ.png','men/wB.png','men/wN.png','men/wR.png'];
    men_black=['men/bP.png','men/bR.png','men/bN.png','men/bB.png','men/bK.png','men/bQ.png','men/bB.png','men/bN.png','men/bR.png'];

    for (let i=0; i<=7; i++){
      $('.white-row-zero').append(`<img src="${men_white[0]}" style="width:35px; height:35px;">`);
      $('.black-row-zero').append(`<img src="${men_black[0]}" style="width:35px; height:35px;">`);
    }

    for (let i=1; i<=8; i++){
      $('.white-row-one').append(`<img src="${men_white[i]}" style="width:35px; height:35px;">`);
      $('.black-row-one').append(`<img src="${men_black[i]}" style="width:35px; height:35px;">`);
    }
    
  for (let i=col.length-1; i>=0; i--){
    for (let j=row.length-1; j>=0; j--){
      if ((i+j)%2===0){
        $(`.row-${i}`).append(
         `<div class="white-square">
            <div class="${col[i]}${row[j]}">
              <p>${col[i]}${row[j]}</p>
            </div>
          </div>`)
      } else {
      $(`.row-${i}`).append(
        `<div class="black-square">
          <div class="${col[i]}${row[j]}">
            <p>${col[i]}${row[j]}</p>
          </div>
        </div>`)        
      }
    }
  }  
});