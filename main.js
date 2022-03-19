// Fold UnFold
icons = document.querySelectorAll(".small-icon")
console.log(icons)

for (icon of icons){

    
    icon.onclick = function(){
        card = this.parentNode.parentNode

        p = card.querySelector('p')
        
        if(p.style.display === 'none' || p.style.display == ''){
            p.style.display = 'block'
            this.classList.remove('fa-caret-down')
            this.classList.add('fa-caret-up')
            
        }    
        else{
            p.style.display = 'none'
            this.classList.add('fa-caret-down')
            this.classList.remove('fa-caret-up')
            
        }
    }
}


// Hamburger Effect
bars = document.querySelector(".fa-bars")

bars.onclick = function(){
    links = document.querySelectorAll(".link")

    links.forEach( link => {
        //~ link.classList.toggle('show-element')

        if( link.style.display == 'none' || '')
            link.style.display = 'inline-block'
        else
            link.style.display = 'none'
        
    })
}


