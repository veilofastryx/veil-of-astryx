window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const bannerImg = document.getElementById('banner-img');

  if (bannerImg) {
    bannerImg.style.top = `-${scroLLY * 0.25}px`;
  }
});

