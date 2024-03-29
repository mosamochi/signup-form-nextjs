import "./success-styles.css"
import Link from "next/link";
import Image from "next/image";

export default function Success() {

  return (
    <>
    <header><h1>Thank you for (fake) joining</h1></header>
    <main>
        
        <section>
        <h2>Your data has not been recorded but you are a rockstar!</h2>
        <p> Thank you for clicking through this far!</p>
        </section>
        
        <Link href='/'><Image className='image-success' src="/signup-form-nextjs/Kitty.jpg"></Image></Link>
    </main>
    </>
   
  );
      }
      