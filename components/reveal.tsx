'use client'
import React,{useEffect,useRef} from "react";
import  {motion,useAnimation,useInView} from "framer-motion";

export function Reveal({children}: {children: React.ReactNode}) {
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const ref=useRef(null);
    const isInView = useInView(ref,{once:true});
    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
    },[isInView])
    return (    
        <div ref={ref} style={{overflow:'hidden',position:'relative'}}
        >
            <motion.div
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{duration:0.5,delay:0.5}}
        variants={{
            visible:{opacity:1,y:0},
            hidden:{opacity:0,y:75}
        }}
        >
            {children}
        </motion.div>
        <motion.div 
        className="bg-foreground"
            initial="hidden"
            variants={{
                visible:{left:'100%'},
                hidden:{left:0}
            }}
            animate={slideControls}
                transition={{ duration: 0.6, ease:"easeIn" }}
                style={{position:'absolute',
                  
                  top:4,
                  bottom:4,
                  right:0,
                  left:0,
                  zIndex:20
                }}
            ></motion.div>
        </div>
    )
}