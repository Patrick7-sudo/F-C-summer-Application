
// light-mode segment

const body=document.querySelector('.night-mode');
const checkBox=document.getElementById('checkbox');

function lightMode(){
    let nightMode = body.classList.contains('night');
    if(nightMode){
        body.classList.remove('night');
    }else{body.classList.add('night');}
}

checkBox.addEventListener('click',lightMode);

// end of light-mode segment

//riddle segment

const riddleInput=document.getElementById("riddle-answer");
const submitBtn=document.querySelector('.btn-submit');
const resetBtn=document.querySelector('.btn-reset')
const cloudsMoving=document.querySelector('.clouds');
const wrongAns=document.querySelector('.wrongAns')

function riddle(){
    const userInput =riddleInput.value;
    const ansModify=userInput.toLowerCase();

    if(ansModify === `cloud` || ansModify ===`clouds`){
        return cloudsMoving.classList.remove('hidden'), wrongAns.classList.add('hidden');
    }else if(ansModify !== `cloud` && ansModify !==""){
        return cloudsMoving.classList.add('hidden'), wrongAns.classList.remove('hidden')};

return ansModify;
}

submitBtn.addEventListener('click',riddle);
submitBtn.addEventListener('click',function(e){e.preventDefault();});

resetBtn.addEventListener('click',function(){
    cloudsMoving.classList.add('hidden'), wrongAns.classList.add('hidden');
    riddleInput.value="";
});

resetBtn.addEventListener('click',function(e){
    e.preventDefault();
});

//end of riddle segment

//slider Why F&C segment
const slider=document.querySelectorAll('.slide');
const prevBtn=document.querySelector('.prevBtn');
const nextBtn=document.querySelector('.nextBtn');
console.log(slider)


slider.forEach(function (slide,index){
    slide.style.left=`${index * 100}%`;
});

let counter=0;

nextBtn.addEventListener('click', function(){
    counter++;
    carousel();
});

prevBtn.addEventListener('click', function(){
    counter--;
    carousel();
});


function carousel(){
    if(counter<slider.length-1){
        nextBtn.style.display="block";
    }else{
        nextBtn.style.display="none"
    }

    if(counter >0){
        prevBtn.style.display="block";
    }else{
        prevBtn.style.display="none";
    }

    slider.forEach(function(slide){
        slide.style.transform=`translateX(-${counter*100}%)`
    })
}
//end of slider Why F&C segment
