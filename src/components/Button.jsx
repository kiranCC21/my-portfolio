const Button = ({ children, variant }) => {

  const base =
    "px-5 py-2 rounded-lg font-medium transition-all duration-200 active:scale-[0.98]";

  const styles = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm hover:shadow-md",

    outline:
      "border border-white text-white hover:text-blue-500 hover:border-blue-500",

  };

  return (
    <button className={`${base} ${styles[variant || "primary"]}`}>
      {children}
    </button>
  );
};

export default Button;
