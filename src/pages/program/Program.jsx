import React, {useRef} from "react";
import styles from "./Program.module.css";
import {Data} from "./Data";
import {FcNext, FcPrevious} from "react-icons/fc";


export function Program() {

  const storeRef = useRef(null)
  const handleRight=()=>{
     storeRef.current.scrollLeft+=300
    //  console.log(storeRef.current.scrollLeft)
  }

  const handleLeft=()=>{
    storeRef.current.scrollLeft-=300
    // console.log(storeRef.current.scrollLeft)
  }

  return (
    <>
    <div className={styles.mainContainer}>
      <h1>Trainer section</h1>
      
      <div className={styles.scrollerCard} ref={storeRef}> 
        {Data.map((item, index) => {
          return (
            <div className={styles.card} key={item.id}>
              <img src={item.Img} alt="programs" />
              <h5>{item.Name}</h5>
            </div>
          );
        })}
      </div>
      <div className={styles.btn}>
      <FcPrevious onClick={handleLeft}/>
      <FcNext onClick={handleRight}/>     
      </div>
      </div>
      
    </>
  );
}