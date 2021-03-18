// function criarCalculadora(){
//     return{
//         display: document.querySelector('.display'),
//         btn_clear : document.querySelector('.btn_clear'),

//         clear_display(){
//             this.display.value = '';
//         },

//         pop(){
//             this.display.value = this.display.value.slice(0, -1); // PAra poder apagar o ultimo elementos.
//         },

//         solve(){
//             try{
//                 this.display.value = eval(this.display.value);
//             }catch{
//                 alert('Erro');
//             }

//         },

//         inicia(){
//             this.click_button();
//             this.enter_press();
//         },

//         enter_press(){
//             this.display.addEventListener('keyup', (e) =>{
//                 if(e.keyCode=== 13){
//                     this.solve();
//                 }
//             })
//         },


//         click_button(){
//             document.addEventListener('click', function(e){
//                 const el = e.target;  

//                 if (el.classList.contains('btn-num')){
//                     this.btn_para_display(el.innerText);
//                 }
//                 if(el.classList.contains('btn_clear')){
//                     this.clear_display();
//                 }
//                 if(el.classList.contains('btn_pop')){
//                     this.pop();
//                 }

//                 if(el.classList.contains('btn_solve')){
//                     this.solve();
//                 }

//             }.bind(this)); // usar o this do elemento anterior

//         },
//         btn_para_display(valor){
//             this.display.value += valor;
//         }

//     };
// }

// const calculadora = criarCalculadora();
// calculadora.inicia();


function Calculadora() {
    this.display = document.querySelector('.display');

    this.captura_clicks = () => {


        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.add_numero(el);
            if (el.classList.contains('btn_clear')) this.clear_numero(el);
            if (el.classList.contains('btn_pop')) this.pop_numero(el);
            if (el.classList.contains('btn_solve')) this.solve_numero(el);

        });
    };

    this.clear_numero = (el) => {
        this.display.value = '';
    };

    this.pop_numero = el => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.solve_numero = el => this.display.value = eval(this.display.value);

    this.add_numero = el => {
        this.display.focus();
        this.display.value += el.innerText;
        
    };

    this.enter = () =>{ // NAO FUNCIONA
        this.display.addEventListener('keypress', e =>{
            if(e.keyCode === 13) {;
                this.solve_numero();
            }
            
        });
    };
        

    this.iniciar = () => {
        this.captura_clicks();
        
    };

}

const calculadora = new Calculadora();
calculadora.iniciar();