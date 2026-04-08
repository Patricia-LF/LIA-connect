import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import styles from "./QR.module.css";
import arrowLeft from "../assets/arrow-left 1.png";

export default function QR({ url }) {
  const [open, setOpen] = useState(false);

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
      {/* Overlay som stänger drawern vid klick utanför */}
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
