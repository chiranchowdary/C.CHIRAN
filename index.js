let count = 1;
function increase()
{
    count++;
    document.getElementById("ctr_data").innerHTML = count;
}
function decrease(){
    if(count >= 1){
        count--;
        document.getElementById("ctr_data").innerHTML = count;
    }
}