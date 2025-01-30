import React from 'react'
import styles from "./Loader.module.css";

export default function Loader() {
    return (
        <div className={`${styles.loader} flex w-full h-screen items-center justify-center top-[50%]`}>
            <div data-glitch="Loading..." className={styles.glitch}>Loading...</div>
        </div>

        // <div className="container">
        //     <div className="square black">
        //         <div className="square bg-pink-400">
        //             <div className="square black">
        //                 <div className="square bg-yellow-400">
        //                     <div className="square black">
        //                         <div className="square bg-lime-300">
        //                             <div className="square black">
        //                                 <div className="square bg-red-400">
        //                                     <div className="square black">
        //                                         <div className="square bg-blue-500">
        //                                             <div className="square black">
        //                                                 <div className="square bg-emerald-300">
        //                                                     <div className="square black">
        //                                                         <div className="square border-orange-400">
        //                                                             <div className="square black">
        //                                                                 <div className="square bg-lime-400">
        //                                                                     <div className="square black">
        //                                                                         <div className="square bg-cyan-600">
        //                                                                             <div className="square black">
        //                                                                                 <div className="square border-indigo-400">
        //                                                                                     <div className="square black">
        //                                                                                         <div className="square bg-red-400">
        //                                                                                             <div className="square black">
        //                                                                                                 <div className="square bg-teal-400">
        //                                                                                                     <div className="square black">
        //                                                                                                         <div className="square bg-blue-400">
        //                                                                                                             <div className="square black">
        //                                                                                                                 <div className="square bg-white">
        //                                                                                                                     <div className="square  bg-yellow-400">
        //                                                                                                                     </div>
        //                                                                                                                 </div>
        //                                                                                                             </div>
        //                                                                                                         </div>
        //                                                                                                     </div>
        //                                                                                                 </div>
        //                                                                                             </div>
        //                                                                                         </div>
        //                                                                                     </div>
        //                                                                                 </div>
        //                                                                             </div>
        //                                                                         </div>
        //                                                                     </div>
        //                                                                 </div>
        //                                                             </div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
