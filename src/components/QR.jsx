// QRDrawer.jsx
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import styles from "./QR.module.css";

export default function QR({ url }) {
  const [open, setOpen] = useState(false);

  if (!url) return null;

  return (
    <div className={`${styles.drawer} ${open ? styles.open : ""}`}>
      <button className={styles.tab} onClick={() => setOpen((prev) => !prev)}>
        Portfolio <img src="src/assets/arrow-left 1.png"></img>
      </button>
      <div className={styles.content}>
        <QRCodeCanvas value={url} size={180} />
        <p className={styles.url}>{url}</p>
      </div>
    </div>
  );
}
