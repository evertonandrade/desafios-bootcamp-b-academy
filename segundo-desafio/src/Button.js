function Button({ children, kind, ...props }) {
  return (
    <button kind={kind} className={kind} {...props}>
      {children}
    </button>
  );
}

export default Button;
