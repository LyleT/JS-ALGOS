function domainName(url){
    
    // Use split() and replace() methods to solve this problem

    return url
        .replace("http://", "")
        .replace("www.", "")
        .replace("https://", "")
        .split(".")[0];
    
  }





  console.log(domainName("http://google.com")); // "google"
   console.log(domainName("http://google.co.jp")); // "google"
   console.log(domainName("www.xakep.ru")); // "xakep"
   console.log(domainName("https://youtube.com")); // "youtube"