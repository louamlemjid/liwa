import { Reveal } from './reveal';
import dynamic from 'next/dynamic';
import { Button } from './ui/Button';

const Robot3DModel = dynamic(() => import('../components/tennis3dModel'), {
  ssr: false,
});


export default function Hero() {
    return (
        <section className="h-screen bg-background grid grid-cols-1 grid-rows-2 m-auto" 
      id='home'>
  
   
    <div>
      <Robot3DModel/>
    </div>


    <div className='text-center'>
      <Reveal>
        <h1
        className="text-3xl md:text-6xl font-bold sm:pb-5 md:py-6 pb-4"
      >
       Hey, I'm Liwa<span className="text-highlight text-6xl">.</span>
      </h1>
      </Reveal>
      <Reveal>
        <p
          className="text-foreground m-auto text-xl w-80 md:w-96"
        >
          I've spent the last 2 years building and scaling software aiming for real-world application in Tunisia to solve major problems including :
          Transport, Home-Automation and Agriculture. 
          
        </p>
      </Reveal>
      <Reveal>
        <div
        className="mt-6 space-x-6"
      > 
      <Button variant="default" size='lg'>
        Get In Touch
      </Button>
       
      </div>
      </Reveal> 
    </div>

</section>
    )
}