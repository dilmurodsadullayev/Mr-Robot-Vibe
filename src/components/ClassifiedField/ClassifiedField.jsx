function ClassifiedField({
  label,
  value,
  danger = false,
}) {
  return (
    <div className="classified-field">
      <span className="classified-field__label">
        {label}
      </span>

      <span
        className={`
          classified-field__value
          ${
            danger
              ? "classified-field__value--danger"
              : ""
          }
        `}
      >
        {value}
      </span>
    </div>
  );
}

export default ClassifiedField;