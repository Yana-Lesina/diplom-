const smoothScroll = () => {
  const offerBlock = document.getElementById('offer');
  const anchor = document.querySelector('a.smooth-scroll');

  anchor.style.display = 'none';
  window.addEventListener('scroll', () => {
    const top = document.documentElement.scrollTop;

    if(top >= offerBlock.clientHeight) {
       anchor.style.display = 'block';

    } else {
      anchor.style.display = 'none';
    }
  })

  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const blockID = anchor.getAttribute('href');

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
export default smoothScroll;