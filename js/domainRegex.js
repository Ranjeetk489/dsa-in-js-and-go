//Program to check valid domain name from various uri


function domainName(url){
    //extracts the domain name
    const domain = new RegExp(/\w*[-]?[a-z0-9-]*/)
    //replaces the http, https, www by matching from uril 
    return domain.exec(url.replace(/(http[s]?:\/\/)?(www)?\.?/))[0];
}

console.log(domainName("wn-rp1bgfo31dmw3r6cj5b68.fr"))