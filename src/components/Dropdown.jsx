import { useState } from "react";
import styles from "../pages/ProfileForm.module.css";
import caret from "../assets/caret.svg";

export default function Dropdown({
  value,
  onChange,
  options,
  placeholder = "Välj...",
  searchable = false,
}) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");

  const filtered = searchable
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(inputValue.toLowerCase()),
      )
    : options;

  const selectedLabel = options.find((opt) => opt.value === value)?.label || "";

  return (
    <div className={styles["dropdown-wrapper"]}>
      <input
        type="text"
        className={styles.fieldInput}
        placeholder={placeholder}
        value={searchable ? inputValue : selectedLabel}
        readOnly={!searchable}
        autoComplete="off"
        onClick={() => setOpen((prev) => !prev)}
        onChange={(e) => {
          if (searchable) {
            setInputValue(e.target.value);
            setOpen(true);
          }
        }}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
      />

      <span className={styles["dropdown-arrow"]}>
        <img src={caret} alt="" />
      </span>

      {open && filtered.length > 0 && (
        <ul className={styles["dropdown-suggestions"]}>
          {filtered.map((opt) => (
            <li
              key={opt.value}
              onMouseDown={() => {
                onChange(opt.value);
                setInputValue(opt.label);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
