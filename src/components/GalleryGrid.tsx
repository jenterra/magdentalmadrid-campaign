"use client";

import { ImageLightboxGrid } from "@/components/ImageLightboxGrid";
import { COPY, GALLERY } from "@/lib/site";

export function GalleryGrid() {
  return (
    <ImageLightboxGrid
      images={GALLERY}
      gridClassName="gallery-grid"
      itemClassName="gallery-grid__item"
      dialogLabel={COPY.lightbox.galleryAria}
      stageId="gallery-lightbox-stage"
    />
  );
}
