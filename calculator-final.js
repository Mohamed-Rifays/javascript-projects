var calculation= localStorage.getItem('calculation')||'';
     saveCalculation();


      function updateCalculation(value){
        calculation+=value;
       saveCalculation();
        
        localStorage.setItem('calculation',calculation);
      }
      function saveCalculation(){
        document.querySelector('.calculating').innerHTML=calculation;
      }