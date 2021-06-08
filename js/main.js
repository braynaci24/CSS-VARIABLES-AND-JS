const inputs = document.querySelectorAll('.controls input'); //  controlsun içindeki bütün inputları aldık

function handleUpdate (){
    const suffix = this.dataset.sizing || ''; // px ine ulaştık
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)// ismine ve valuesüne ulaştık
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

