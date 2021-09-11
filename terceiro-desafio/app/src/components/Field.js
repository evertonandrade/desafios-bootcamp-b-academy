function Field({ form, id, label, type, handleChange, ...props }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={form[id]}
        onChange={handleChange}
        {...props}
      />
    </>
  );
}

export default Field;
