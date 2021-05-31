import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('modal-container')) {
            setSelectedImg(null)
        }
    }

    return (
        <motion.div className="modal-container" onClick={handleClick} initial={{opacity: 0}} animate={{opacity: 1}}>
            <motion.img src={selectedImg} alt="images" initial={{y: "-100vh"}} animate={{y: 0}}></motion.img>
        </motion.div>
    )
}

export default Modal;