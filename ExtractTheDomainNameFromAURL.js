// Como eu fiz:

function domainName(url){
  if (url.includes('https://www') || url.includes('http://www')) {
    return (
      url
        .split("www.")[1]
        .split(".")[0]
    );
  }

  if (url.includes('https://') || url.includes('http://')) {
    return (
      url
        .split("//")[1]
        .split(".")[0]
    );
  }

  if (url.includes('www.')) {
    return (
      url
      .split("www.")[1]
      .split(".")[0]
    );
  }

  return (
    url
    .split('.')[0]
  )
};

// Como eu poderia ter feito (sei fazer assim mas nao pensei na hora):

function domainName(url){
  return (
    url
      .replace("https://", '')
      .replace("http://", '')
      .replace("www.", '')
      .split('.')[0]
  )
}
