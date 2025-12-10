window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const bannerImg = document.getElementById('banner-img');

  if (bannerImg) {
    bannerImg.style.top = `-${scrollY * 0.25}px`;
  }
});
