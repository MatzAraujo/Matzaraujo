

   // Quando clicar no menu Hambúrguer, ele irá abrir uma navegação lateral no canto direito da página  

  const menuToggle = document.querySelector('.toggle') 
  const navshow = document.querySelector('.container') 

  menuToggle.addEventListener('click', () =>{
     menuToggle.classList.toggle('show')
     navshow.classList.toggle('show')
 })

