// QR.jsx
// Slide-in drawer showing a QR code for the student's portfolio URL.
// Only rendered if a URL has been provided.

import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import styles from "./QR.module.css";
import arrowLeft from "../assets/arrow-left 1.png";

export default function QR({ url }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll when the drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!url) return null;

  return (
    <>
      {/* Transparent overlay — closes the drawer when tapped outside */}
      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)} />
      )}

      <div className={`${styles.drawer} ${open ? styles.open : ""}`}>
        <button className={styles.tab} onClick={() => setOpen((prev) => !prev)}>
          Portfolio <img src={arrowLeft} />
        </button>
        <div className={styles.content}>
          <p className={styles["qr-title"]}>Portfolio</p>
          <QRCodeCanvas value={url} size={180} />
          <p className={styles.url}>{url}</p>
        </div>
      </div>
    </>
  );
}
