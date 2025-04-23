"use client"

import Image from "next/image";
import {Fade, Modal} from "@mui/material";
import {useRef, useState} from "react";
import {useI18n} from "@/locales/client";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CloseIcon from '@mui/icons-material/Close';
export default function Gallery({project}: {project: Record<any, any>}) {
    const [modalImage, setModalImage] = useState("false");
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContentType, setModalContentType] = useState('image');
    const imagesListRef = useRef<HTMLUListElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    const t =  useI18n();

    const allImages = project.gallery;

    const handleOpen = (index: number) => {
        setImageFromIndex(index);
        return setModalOpen(true);
    }

    const handleClose = (e: Event) => {
        console.log('handleClose', e)
        if (e.target === e.currentTarget || e.currentTarget?.classList.contains('close'))
            return setModalOpen(false);
    }

    const handlePreviousLink = () => {
        if (modalImageIndex > 0)
            setImageFromIndex(modalImageIndex - 1);
    }

    const handleNextLink = () => {
        if (modalImageIndex < allImages.length - 1)
            setImageFromIndex(modalImageIndex + 1);
    }

    const setImageFromIndex = (index: number) => {
        setModalImageIndex(index);
        const $li = imagesListRef.current?.querySelector('li:nth-child(' + (index + 1) + ')');
        const imageUrl = $li?.getAttribute('data-fullsize-url');
        const contentType = $li?.getAttribute('data-content-type');
        setModalContentType(contentType || 'image');

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
                    <div className="content" onClick={handleClose}>

                        <div className="image-container">
                            {modalContentType.startsWith('video') &&
                                <video autoPlay controls>
                                    <source src={modalImage} type={modalContentType} />
                                </video>
                            }
                            {modalContentType === 'image' &&
                                <img src={modalImage} alt="" onClick={handleClose} />
                            }
                        </div>
                        <div className="overlay"  onClick={handleClose}>
                            <button className="nav-button close" onClick={handleClose}>
                                <CloseIcon fontSize="large">Close</CloseIcon>
                            </button>
                        {modalImageIndex > 0 &&
                            <button className="nav-button previous" onClick={handlePreviousLink}>
                                <SkipPreviousIcon fontSize="large">Précédent</SkipPreviousIcon>
                            </button>
                        }

                        {modalImageIndex < allImages.length - 1 &&
                            <button className="nav-button next" onClick={handleNextLink}>
                                <SkipNextIcon fontSize="large">Suivant</SkipNextIcon>
                            </button>
                        }
                        </div>
                    </div>
                </Fade>
            </Modal>
            <section className="gallery">
                <h2>{t('gallery.apercu')}</h2>
                <ul ref={imagesListRef}>
                    {allImages.map((fileName: string | object, index: number) => {
                        let fullSizeImageUrl, thumbUrl, type;
                        if (typeof fileName === 'object') {
                            fullSizeImageUrl = '/images/' + fileName.fileName;
                            thumbUrl = '/images/' + fileName.thumbFileName;
                            type = fileName.type || 'image';
                        }
                        else {
                            fullSizeImageUrl = '/images/' + fileName;
                            thumbUrl = fullSizeImageUrl;
                            type = 'image';
                        }

                        return (
                        <li key={index}
                            data-fullsize-url={fullSizeImageUrl}
                            data-content-type={type}
                            onClick={() => handleOpen(index)}>
                            <Image src={thumbUrl}
                                   alt="" quality={75} className="project-image"
                                   width={500} height={300}
                            />
                            {type.startsWith('video') &&
                                <div className="video-thumb-overlay">
                                    <PlayCircleIcon fontSize="inherit">Play</PlayCircleIcon>
                                </div>
                            }
                      </li>);
                    })}
                </ul>
            </section>
        </>
    );
}