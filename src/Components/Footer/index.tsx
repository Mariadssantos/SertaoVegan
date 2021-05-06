import  styles  from './footer.module.scss';

import Link from 'next/link';


export default function ContentFooter (){

    return(

         <div className={styles.footerContainer}>
  
         <div className={styles.footerContent}>
           <div className={styles.left}>
            
            
           <Link href="https://www.instagram.com/madustts/">
           <button className={styles.button} > <img src="/logo-instagram.png" alt="Instagram"/> </button>
           </Link>
           <button className={styles.button}> <img src="/logo-facebook.png" alt="Facebook"/> </button>
           <button className={styles.button}> <img src="/logo-whatsapp.png" alt="WhatsApp"/></button>
           <Link href="https://www.linkedin.com/in/mariaeduardasantoss/"> 
           <button className={styles.button}> <img src="/logo-linkedin.png" alt="LinkedIn"/></button>
           </Link>
           <Link href="https://github.com/Mariadssantos">
           <button className={styles.button} > <img src="/Vector.png" alt="GitHub"/> </button>
           </Link>
           
           
           </div>

           <div className={styles.right}>
          <h2>Mais Fáceis</h2>
          <h2>Mais Curtidas</h2>
          <h2>Mais Baratas</h2>


           </div>
         </div>
  
         <div className={styles.footerEnd}>
             <h2> ©Copyright: Desenvolvido por Maria Eduarda Santos </h2>
         </div>
       </div>

    )

     
}