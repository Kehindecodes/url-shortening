class Display{
  

    displayLink(link){
      // create div
      const div =  document.createElement('div');
      // add classs
      div.className=" container bg-white  rounded mb-2";
      // add id
      div.id ="shortLink"
    //   div.appendChild(document.createTextNode(`
    //     ${link}
    //   `));
    div.innerHTML =`
    <table class="table">
      
      <tr>
      <td class="text-left ellipsis">${link.url}</td>
      <td class="text-right "><a href= "#" class= "text-info textToCopy">https://rel.ink/${link.hashid}</a></td>
      <td class="text-right"><button class="btn btn-info text-white btn-copy">Copy</button></td>
      <tr>
    

    </table>
    `
    // get elements
       const container = document.querySelector('#statistics');
      const stat = document.querySelector('#stats');
      // const h2 =document.querySelector('#advanced');
      const shortenLink = document.querySelector('.shortenLink')
      const shorten = document.querySelector('.shorten')
      // place the div inside shortenLink
      shortenLink.appendChild(div)
      // stat.insertBefore(div,container);
    }
    
};
// function insertAfter(el, referenceNode) {
//     referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
// }