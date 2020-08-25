//init api object
const link = new Link();

// init ui object
 const ui =  new Display();


// click to  shorten the link 
document.getElementById('shorten').addEventListener('click', (e)=>{

  const form = document.getElementById('form')
   const long = document.getElementById('link').value;
   const input = form['link']
  // show error when  if the input is empty
  if (long==='') {
      showError('link', 'Please add a link')
      input.style.borderColor="#FF7A7A "

      input.setAttribute('placeholder','Shorten a link here...')
      // make placeholder color red
      input.style.setProperty("--c", "#FF7A7A")
  }else{
    showLink()
     removeError('link')
     input.style.borderColor='#ced4da'
    // get stat and reduce padding
     const stat = document.querySelector('#stats');
     stat.style.paddingTop ='4rem'
     // get shortenLink and get it margin
     const shortenLink = document.querySelector('.shortenLink');
     shortenLink.style.marginBottom='7rem'
   console.log(long)
   input.style.setProperty("--c", "#495057")
  }

  
e.preventDefault()
})
 // display  the shortened link

 function showLink() {
   link.shortenedLink()
    .then(data =>{
      console.log(data)
         ui.displayLink(data)  ;
    })
  .catch(err => console.log(err))
     
 }
 // show error
 function showError(input,message){
         const small = form[input].parentNode.querySelector('small');
         small.innerText = message;
         small.style.opacity ='1';

 }
// remove Error
 function removeError(input){
         const small = form[input].parentNode.querySelector('small');
         small.style.display='none';

 }

// copy to clipboard
const textToCopy = document.getElementById("textToCopy");
//const copyButton = document.querySelector(".btn-copy").innerHTML;

// event listener to copy
document.body.addEventListener('click',(e)=>{
  
 
  if( e.target.classList.contains('btn-copy')){
    const textToCopy = document.getElementById("textToCopy").innerHTML;
  // create temporary input
  const temp = document.createElement('INPUT');
  // make temp value to be the text that was copied
  temp.value = textToCopy;
  // append temp input to body
  document.body.appendChild(temp);
  // select the temp input
  temp.select();
  // copy the selected  input using execCommand() method
  document.execCommand('copy');
   temp.remove()


console.log("text copied")
  }
e.preventDefault()
})