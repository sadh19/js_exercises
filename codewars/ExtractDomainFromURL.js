//https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//* url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {

  const re = /https:\/\/|http:\/\/|www\./g;

  let firstClean = url.replace(re, "");

  const urlArray = firstClean.split("");

  return urlArray.slice(0, urlArray.indexOf(".")).join("");
}


console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));