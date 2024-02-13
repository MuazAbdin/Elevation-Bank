function Input({ type, name, ...props }) {
  return (
    <div>
      <label htmlFor={name}></label>
      <input type={type} id={name} name={name} />
    </div>
  );
}

export default Input;
