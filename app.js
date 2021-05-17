// set initial count
let count = 0;

//select values and button
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){ //here(btn) is all the btns
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count=0;
        }


        if(count>0){
            value.style.color = "green";
        } 
        if(count<0){
            value.style.color = "red";
        } 
        if(count===0){
            value.style.color = "black";
        } 
        value.textContent = count;
    });                        //here instead of btn you can write anything
});