let shareToggled = false;

//find shareBtn
const shareBtn = document.querySelector('.article__share');

//find share block
const share = document.querySelector('.share');

//find share footer
const shareFooter = document.querySelector('.article__footer');

//toggling
shareBtn.addEventListener('click', function()
{
  shareToggled = !shareToggled;

  share.style.display = shareToggled ? 'flex' : 'none';
  if(shareToggled)
  {
    shareBtn.classList.add('active');
    shareFooter.classList.add('active');
  }
  else
  {
    shareBtn.classList.remove('active');
    shareFooter.classList.remove('active');
  }
});