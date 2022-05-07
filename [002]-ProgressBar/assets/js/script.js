const progressBar = document.getElementById('progress')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const circulosStep = document.querySelectorAll('.circle')

let etapaAtual = 1

nextBtn.addEventListener('click', () => {
    etapaAtual++
    
    if(etapaAtual > circulosStep.length){
        etapaAtual = circulosStep.length
    }

    updateStep()
})

prevBtn.addEventListener('click', () => {
    etapaAtual--
    
    if(etapaAtual < 1){
        etapaAtual = 1
    }

    updateStep()
})

function updateStep(){
    circulosStep.forEach((circle, id) => {
        if(id < etapaAtual){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })

    const circulosAtivos = document.querySelectorAll('.active')

    progressBar.style.width = (circulosAtivos.length - 1) / (circulosStep.length -1) * 100 + '%'

    if(etapaAtual === 1){
        prevBtn.disabled = true
    }else if( etapaAtual === circulosStep.length){
        nextBtn.disabled = true
    }else{
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}