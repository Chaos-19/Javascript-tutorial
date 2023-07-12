const counter = document.querySelector('#counter');
    
    var counterValue = 0;
    
    counter.textContent = counterValue;
    
    document.getElementById('increase').addEventListener('click', increase);
    document.getElementById('decrease').addEventListener('click', decrease);
    
    function increase() {
      counter.textContent = ++counterValue;
    }
    
    function decrease() {
    
      counter.textContent = --counterValue;
    }