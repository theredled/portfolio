"use client"

import {useRef, useState} from 'react';
import Modal from '@mui/material/Modal';
import {Fade} from "@mui/material";

export default function ImageModal({imagesListRef, shownIndex, isOpen}) {
    const [modalImage, setModalImage] = useState("false");
    const [modalImageIndex, setModalImageIndex] = useState(shownIndex);
    const [modalOpen, setModalOpen] = useState(isOpen);
    const modalRef = useRef<HTMLDivElement>(null);


    const handleOpen = (index: number) => {
        setImageFromIndex(index);
        return setModalOpen(true);
    }

    const handleClose = (e: Event) => {
        if (e.target === e.currentTarget)
            return setModalOpen(false);
    }

    const handlePreviousLink = () => {
        if (modalImageIndex > 0)
            setImageFromIndex(modalImageIndex - 1);
    }

    const handleNextLink = () => {
        if (modalImageIndex < imagesListRef.current.length - 2)
            setImageFromIndex(modalImageIndex + 1);
    }

    const setImageFromIndex = (index: number) => {
        setModalImageIndex(index);
        const $li = imagesListRef.current?.querySelector('li:nth-child(' + (index + 1) + ')');
        const imageUrl = $li?.getAttribute('data-fullsize-url');
        const contentType = $li?.getAttribute('data-content-type');
        if (!contentType || !['video', 'image'].includes(contentType))
            return;
        //modalRef.current?.querySelector(`.image-container :has[data-content-type]:not[data-content-type="${contentType}"]`)?.remove();
        if (imageUrl)
            setModalImage(imageUrl);
    }

    return (
        <>
            <Modal className="modal image-modal"
                   ref={modalRef}
                   open={modalOpen}
                   onClose={handleClose}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description"
            >
                <Fade in={modalOpen} timeout={500}>
                    <div className="content">

                        <div className="image-container">
                            <img src={modalImage} alt=""/>
                            <video controls></video>
                        </div>
                        <div className="overlay" onClick={handleClose}>
                            {modalImageIndex > 0 &&
                                <button className="nav-button previous" onClick={handlePreviousLink}>
                                    <SkipPreviousIcon fontSize="large">Précédent</SkipPreviousIcon>
                                </button>
                            }
                            {modalImageIndex < allImages.length - 2 &&
                                <button className="nav-button next" onClick={handleNextLink}>
                                    <SkipNextIcon fontSize="large">Suivant</SkipNextIcon>
                                </button>
                            }
                        </div>
                    </div>
                </Fade>
            </Modal>

            }