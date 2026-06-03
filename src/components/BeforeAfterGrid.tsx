"use client";

import { ImageLightboxGrid } from "@/components/ImageLightboxGrid";
import { BEFORE_AFTER, COPY } from "@/lib/site";

export function BeforeAfterGrid() {
  return (
    <ImageLightboxGrid
      images={BEFORE_AFTER}
      gridClassName="ba-grid"
      itemClassName="ba-grid__item"
      dialogLabel={COPY.lightbox.beforeAfterAria}
      stageId="ba-lightbox-stage"
    />
  );
}
