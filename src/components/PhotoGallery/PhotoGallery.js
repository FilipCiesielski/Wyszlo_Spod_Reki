import React, {useState, useCallback} from "react";
import {photos} from "./photos";
import Carousel, {Modal, ModalGateway} from "react-images";
import Gallery from "react-photo-gallery";

const PhotoGallery =()=> {


        const [currentImage, setCurrentImage] = useState(0);
        const [viewerIsOpen, setViewerIsOpen] = useState(false);

        const openLightbox = useCallback((event, {photo, index}) => {
            setCurrentImage(index);
            setViewerIsOpen(true);
        }, []);

        const closeLightbox = () => {
            setCurrentImage(0);
            setViewerIsOpen(false);
        };

                return (
                <div name={"PhotoGallery"} className={"photoGallery"}>
                    <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            );
    };

    export default PhotoGallery
