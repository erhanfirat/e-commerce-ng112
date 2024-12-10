type ButtonProps = React.ComponentProps<"button"> &
  React.PropsWithChildren & {
    color?: "blue" | "orange" | "green" | "red";
  };

const Button: React.FC<ButtonProps> = ({
  children,
  color = "blue",
  ...htmlButtonAttributes
}: ButtonProps) => {
  // Her renderda burası çalışacak

  return (
    <button className={`btn btn-${color}`} {...htmlButtonAttributes}>
      {children}
    </button>
  );
};

export default Button;
