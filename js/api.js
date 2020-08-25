class Link{
   
    // constructor() {
    //     this.url='https://www.alpari.org/login'
    // }
    async shortenedLink(){
      
        const long = document.getElementById('link').value;
        let longLink ={long};
        const res = await fetch(`https://rel.ink/api/links/`,{
            method:"POST",
            body:JSON.stringify({"url":long}),
            headers:{
                "Content-type": "application/json"
            }

        })
        const responseData = await res.json()
        return responseData;
        
    }
}