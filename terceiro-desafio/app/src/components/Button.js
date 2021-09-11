function Button({ children, kind, ...props }) {
  return (
    <button className={kind} {...props}>
      {children}
    </button>
  );
}

export default Button;
