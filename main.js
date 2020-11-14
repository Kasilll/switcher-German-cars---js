const tabSwither = document.querySelectorAll('.data-switcher');
const arrCarBrand = document.querySelectorAll('.Page');

tabSwither.forEach((carBrand,indexCarBrand)=>{
    carBrand.addEventListener('click', function(){
        removeClasslist(tabSwither);
        removeClasslist(arrCarBrand)
        this.classList.add('is-active');
        arrCarBrand[indexCarBrand].classList.add('is-active');        
    })
})


function removeClasslist(props) {
    for(const elem of props) {
        elem.classList.remove('is-active')
    }
}


  