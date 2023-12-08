let Menubt=document.getElementById("Menubt")

Menubt.addEventListener('click',function(e)
{
 document.querySelector('body').classList.toggle('mobile-nav-active');
 this.classList.toggle('fa-xmark')
})



let typed=new Typed('.auto-input',{
    strings :['Eswar Achari.','Front-End Developer!','Python Developer.'],
    
    typeSpeed:70,
    backSpeed:60,
    backDelay: 2000,
    loop:true,
})
let typed1=new Typed('.auto',{
    strings :['Who am I?' , 'About Me'],
    
    typeSpeed:70,
    backSpeed:60,
    backDelay: 2000,
    loop:true,
})
let typed2=new Typed('.autos',{
    strings :['Skills...' , 'Technical Skills I Know...'],
    
    typeSpeed:70,
    backSpeed:60,
    backDelay: 2000,
    loop:true,
})

