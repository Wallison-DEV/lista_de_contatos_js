const form = document.getElementById('formulario');
let linhagem = ' ';



form.addEventListener('submit', function add_ctt(e){
    e.preventDefault();
    
    adicionaContato();

}) 

function adicionaContato(){
    const inputNome = document.getElementById('nome-ctt')
    const inputNumero = document.getElementById('num-ctt')

    let linha = `<tr>`
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputNumero.value}</td>`
    linha+= `</tr>`

    linhagem+=linha;

    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhagem;
}