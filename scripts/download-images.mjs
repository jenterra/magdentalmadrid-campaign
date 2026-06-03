import fs from "fs";
import path from "path";

const BASE = "https://laura-g.360elevate.store/wp-content/uploads";
const OUT = "public/images";

const files = [
  ["2026/02/AP_SIa_-A¼MBOLO_Waterm_white-1.png", "logo.png"],
  // google-reviews.png – use colorful asset in public/images (not remote monochrome)
  ["2026/02/MedSky.png", "favicon.png"],
  ["2026/02/Rectangle-1-1.webp", "hero-bg.webp"],
  ["2026/05/WhatsApp-Image-2026-05-13-at-5.59.31-PM.jpeg", "service-1.jpeg"],
  ["2026/05/WhatsApp-Image-2026-05-13-at-5.59.31-PM-1.jpeg", "service-2.jpeg"],
  ["2026/05/WhatsApp-Image-2026-05-13-at-5.59.32-PM.jpeg", "service-3.jpeg"],
  ["2026/02/PHOTO-2025-09-28-18-32-36-768x768.webp", "ba-1.webp"],
  ["2026/02/D0EA6465-4734-4115-8D2B-85A981A62E08-819x1024.webp", "ba-2.webp"],
  ["2026/02/B4799596-A459-4894-8604-D1DD37160B27-768x768.webp", "ba-3.webp"],
  ["2026/02/PHOTO-2025-09-28-18-32-26-13-768x768.webp", "ba-4.webp"],
  ["2026/02/PHOTO-2025-09-28-18-32-26-12-768x768.webp", "ba-5.webp"],
  ["2026/02/PHOTO-2025-09-28-18-32-26-5-768x768.webp", "ba-6.webp"],
  ["2026/02/PHOTO-2025-09-28-18-32-26-3-768x768.webp", "ba-7.webp"],
  ["2026/02/F0205D80-A5C7-488B-BEF9-F85F91EB183D-768x768.webp", "ba-8.webp"],
  ["2026/02/E7DA8E23-9E24-4C5A-AE93-E49407F46782-768x768.webp", "ba-9.webp"],
  [
    "2026/02/PHOTO-2025-11-27-09-27-45-1-scaled-e1772084854428-784x1024.jpg",
    "doctor.jpg",
  ],
  ["2026/02/PHOTO-2026-01-31-10-11-46-768x480.webp", "clinic.webp"],
  ["2026/02/PHOTO-2026-01-23-14-54-10-10-768x1024.webp", "gallery-1.webp"],
  ["2026/02/PHOTO-2026-01-23-14-54-10-3-768x1024.webp", "gallery-2.webp"],
  ["2026/02/PHOTO-2026-01-22-16-27-38-12-768x1024.webp", "gallery-3.webp"],
  ["2026/02/30573-768x1182.webp", "gallery-4.webp"],
  ["2026/02/PHOTO-2025-10-21-17-01-25-2-1-768x1024.webp", "gallery-5.webp"],
  ["2026/02/PHOTO-2026-01-23-14-54-10-3-768x1024.webp", "contact-photo.webp"],
  ["2026/02/b97117aea8009b68d567afad4d8f3d2e60845270.webp", "contact-bg.webp"],
];

fs.mkdirSync(OUT, { recursive: true });

for (const [remote, local] of files) {
  const url = `${BASE}/${remote}`;
  const dest = path.join(OUT, local);
  if (fs.existsSync(dest)) {
    console.log("skip", local);
    continue;
  }
  const res = await fetch(url);
  if (!res.ok) {
    console.error("FAIL", url, res.status);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log("ok", local, buf.length);
}
