(function() {
  function fizzBuzz2(word1, word2, fizzNum, buzzNum, max) {
    fizzNum = Number(fizzNum) || 0;
    buzzNum = Number(buzzNum) || 0;
    max = Number(max) || 0;

    if (max <= 0) return '';

    const out = [];
    for (let i = 1; i <= max; i++) {
      let part = '';
      if (fizzNum > 0 && i % fizzNum === 0) part += word1;
      if (buzzNum > 0 && i % buzzNum === 0) part += word2;
      out.push(part || String(i));
    }
    return out.join(',');
  }

  const $word1 = document.getElementById('word1');
  const $word2 = document.getElementById('word2');
  const $fizzNum = document.getElementById('fizzNum');
  const $buzzNum = document.getElementById('buzzNum');
  const $maxNum = document.getElementById('maxNum');
  const $runBtn = document.getElementById('runBtn');
  const $result = document.getElementById('result');
  const $copyBtn = document.getElementById('copyBtn');
  const $downloadBtn = document.getElementById('downloadBtn');

  function render() {
    const w1 = $word1.value.trim() || 'Fizz';
    const w2 = $word2.value.trim() || 'Buzz';
    const f = parseInt($fizzNum.value, 10) || 3;
    const b = parseInt($buzzNum.value, 10) || 5;
    const m = parseInt($maxNum.value, 10) || 100;

    if (f <= 0 || b <= 0 || m <= 0) {
      $result.textContent = 'Los valores de fizz, buzz y max deben ser mayores que 0.';
      return;
    }

    const res = fizzBuzz2(w1, w2, f, b, m);
    $result.textContent = res.split(',').join(', ');
    return res;
  }

  $runBtn.addEventListener('click', render);

  $copyBtn.addEventListener('click', async () => {
    const text = render();
    try {
      await navigator.clipboard.writeText(text);
      $copyBtn.textContent = 'Copiado!';
      setTimeout(() => $copyBtn.textContent = 'Copiar al portapapeles', 1200);
    } catch {
      $copyBtn.textContent = 'Error al copiar';
      setTimeout(() => $copyBtn.textContent = 'Copiar al portapapeles', 1200);
    }
  });

  $downloadBtn.addEventListener('click', () => {
    const text = render();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'fizzbuzz2_result.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  window.fizzBuzz2 = fizzBuzz2;
})();
