export const Button = ({children, className, onClick}) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};
