window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const bannerImg = document.getElementById('banner-img');

  // Move image upward slowly (0.3 speed)
  bannerImg.style.top = `-${scrollY * 0.3}px`;
});

