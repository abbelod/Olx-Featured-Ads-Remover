const removeCards = () => {

  document.querySelectorAll('li.a3aff9ce').forEach(li => {
    li.remove();
  })
  document.querySelectorAll('article._617daaaa').forEach(article => {

    const isFeatured = article.querySelector('div._42fb40f0') !== null;

    if(isFeatured){
      article.remove();
    }
  
    
  });
  };
  
  removeCards();
  
  new MutationObserver(removeCards).observe(document.body, {
    childList: true,
    subtree: true
  });
  