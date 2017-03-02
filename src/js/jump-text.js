function sparanWrap(word) {
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}

const heading = document.querySelector('.jump');
heading.innerHTML = sparanWrap(heading.textContent);
