const refs = {
    input: document.querySelector('#font-size-control'),
    textSpan: document.querySelector('#text'),
  };

  refs.input.addEventListener('input', onInputChange);

  function onInputChange() {
    const fontSize = refs.input.value + 'px';
    refs.textSpan.style.fontSize = fontSize;
  }