"use client"

import Image from "next/image";
import {Fade, Modal} from "@mui/material";
import {useState} from "react";
import {useI18n} from "@/locales/client";

export default function Gallery({project}: {project: Record<any, any>}) {
    const [modalImage, setModalImage] = useState("false");
    const [modalOpen, setModalOpen] = useState(false);

    const t =  useI18n();

    const handleOpen = (imageUrl: string) => {
        setModalImage(imageUrl);
        return setModalOpen(true);
    }
    const handleClose = () => setModalOpen(false);

    return (
        <>
            <Modal className="modal"
                   open={modalOpen}
                   onClose={handleClose}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description"
            >

                <Fade in={modalOpen} timeout={500}>
                    <img src={modalImage}
                         alt=""
                         style={{maxHeight: "90%", maxWidth: "90%"}}
                    />
                </Fade>

            </Modal>
            <section className="gallery">
                <h2>{t('gallery.apercu')}</h2>
                <ul className="section-content">
                    {project.gallery.map((fileName: string) =>
                      <li onClick={(e) => {
                          const $img = e.currentTarget.querySelector('img');

                          if ($img == null)
                              return;
                          return handleOpen($img.src);
                      }}>
                          <Image src={'/images/' + (fileName || 'no-image.jpg')}
                             alt="" quality={75} className="project-image"
                             width={500}  height={300}
                          />
                      </li>
                    )}
                </ul>
            </section>
        </>
    );
}