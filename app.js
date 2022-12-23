const leftH1 = document.querySelector('#leftH1')
const leftP = document.querySelector('#leftP')
const btns = document.querySelector('.btns-div')
const stImg = document.querySelector('#stImg')
const ndImg = document.querySelector('#ndImg')
const rdImg = document.querySelector('#rdImg')
const stCard = document.querySelector('#stCard')
const ndCard = document.querySelector('#ndCard')
const rdCard = document.querySelector('#rdCard')

const tl = gsap.timeline({defaults:{duration:.3}})

function anim(name,y1,op1,y2,op2,drt) {
    tl.fromTo(name,
    {
        y:y1,
        opacity:op1
    },
    {
        y:y2,
        opacity:op2,
        duration:drt
    })
}
function anime(name,y1,op1,y2,op2,drt) {
    tl.fromTo(name,
    {
        y:y1,
        opacity:op1
    },
    {
        y:y2,
        opacity:op2,
        duration:drt
    },"<")
}
function animat(num,y1,op1,y2,op2,drt){
    tl.fromTo(num,
        {
            y:y1,
            opacity:op1
        },
        {
            scrollTrigger:{
                trigger:'.c',
                start:'1500 80%',
                end:'1600 70%',
                markers:true
            },
            y:y2,
            opacity:op2,
            duration:drt
        },"<")
}
anim(leftH1,200,0,0,1,.7)
anime(stImg,200,0,0,1,.6)
anim(leftP,100,0,0,1,.4)
anime(ndImg,200,0,0,1,.6)
anim(btns,100,0,0,1,.6)
anime(rdImg,200,0,0,1,.6)
animat(stCard,100,0,0,1,.4)
animat(ndCard,100,0,0,1,.4)
animat(rdCard,100,0,0,1,.4)

