"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { COPY } from "@/lib/site";

export type LightboxImage = { src: string; alt: string };

type ImageLightboxGridProps = {
  images: readonly LightboxImage[];
  gridClassName: string;
  itemClassName: string;
  dialogLabel: string;
  closeLabel?: string;
  stageId: string;
  imageWidth?: number;
  imageHeight?: number;
};

const FADE_MS = 320;

function getImageUrl(src: string) {
  if (typeof window === "undefined") return src;
  return new URL(src, window.location.origin).href;
}

export function ImageLightboxGrid({
  images,
  gridClassName,
  itemClassName,
  dialogLabel,
  closeLabel = COPY.lightbox.close,
  stageId,
  imageWidth = 768,
  imageHeight = 1024,
}: ImageLightboxGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const isOpen = activeIndex !== null;
  const current = activeIndex !== null ? images[activeIndex] : null;
  const total = images.length;

  const close = useCallback(() => setVisible(false), []);
  const finishClose = useCallback(() => {
    setActiveIndex(null);
    setZoomed(false);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  useEffect(() => {
    if (visible || activeIndex === null) return;
    const timeout = window.setTimeout(finishClose, FADE_MS);
    return () => window.clearTimeout(timeout);
  }, [visible, activeIndex, finishClose]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + total) % total));
    setZoomed(false);
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % total));
    setZoomed(false);
  }, [total]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, goPrev, goNext]);

  const openFullscreen = async () => {
    const stage = document.getElementById(stageId);
    if (!stage?.requestFullscreen) return;
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await stage.requestFullscreen();
    } catch {
      /* unsupported */
    }
  };

  const shareImage = async () => {
    if (!current) return;
    const url = getImageUrl(current.src);
    try {
      if (navigator.share) await navigator.share({ title: current.alt, url });
      else await navigator.clipboard.writeText(url);
    } catch {
      /* cancelled */
    }
  };

  return (
    <>
      <div className={gridClassName}>
        {images.map((img, index) => (
          <button
            key={img.src}
            type="button"
            className={itemClassName}
            onClick={() => {
              setActiveIndex(index);
              setVisible(false);
            }}
            aria-label={`Ver imagen ${index + 1}: ${img.alt}`}
          >
            <Image src={img.src} alt={img.alt} width={imageWidth} height={imageHeight} />
          </button>
        ))}
      </div>

      {isOpen && current && activeIndex !== null && (
        <div
          className={`gallery-lightbox${visible ? " gallery-lightbox--visible" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={dialogLabel}
          onTransitionEnd={(event) => {
            if (event.target !== event.currentTarget || event.propertyName !== "opacity") return;
            if (!visible) finishClose();
          }}
        >
          <button
            type="button"
            className="gallery-lightbox__backdrop"
            onClick={close}
            aria-label={closeLabel}
          />
          <p className="gallery-lightbox__counter">
            {activeIndex + 1} / {total}
          </p>
          <div className="gallery-lightbox__toolbar">
            <button type="button" className="gallery-lightbox__tool" onClick={openFullscreen} aria-label="Pantalla completa">
              <FullscreenIcon />
            </button>
            <button
              type="button"
              className={`gallery-lightbox__tool${zoomed ? " is-active" : ""}`}
              onClick={() => setZoomed((z) => !z)}
              aria-label={zoomed ? "Reducir zoom" : "Ampliar imagen"}
              aria-pressed={zoomed}
            >
              <ZoomIcon />
            </button>
            <button type="button" className="gallery-lightbox__tool" onClick={shareImage} aria-label="Compartir imagen">
              <ShareIcon />
            </button>
            <button type="button" className="gallery-lightbox__tool gallery-lightbox__tool--close" onClick={close} aria-label={closeLabel}>
              <CloseIcon />
            </button>
          </div>
          <button type="button" className="gallery-lightbox__nav gallery-lightbox__nav--prev" onClick={goPrev} aria-label="Imagen anterior">
            <ChevronIcon direction="left" />
          </button>
          <div
            id={stageId}
            className={`gallery-lightbox__stage${zoomed ? " gallery-lightbox__stage--zoom" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={current.src} alt={current.alt} className="gallery-lightbox__img" draggable={false} />
          </div>
          <button type="button" className="gallery-lightbox__nav gallery-lightbox__nav--next" onClick={goNext} aria-label="Imagen siguiente">
            <ChevronIcon direction="right" />
          </button>
        </div>
      )}
    </>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FullscreenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ZoomIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16 16l5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 12v7a1 1 0 001 1h6a1 1 0 001-1v-7M12 3v10M9 6l3-3 3 3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
