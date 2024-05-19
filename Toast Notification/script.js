let toastBox = document.querySelector("#toastBox");
let successMsg = 'Successfully submitted';
let errorMsg = 'Please fix the error';
let invalidMsg = 'Invalid input, check again!';
function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML= msg;
    toastBox.appendChild(toast);
    if(msg.includes('error')){
        toast.style.setProperty('--toast-after-bg', 'red');
    }
    if(msg.includes('Invalid')){
        toast.style.setProperty('--toast-after-bg', 'orange');
    }
    setTimeout(()=>{
        toast.remove();
    }, 6000)
}