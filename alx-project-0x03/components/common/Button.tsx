import type { ButtonProps } from "@/interface";

const Button: React.FC<ButtonProps> = ({
  action,
  buttonLabel,
  buttonBackgroundColor = "blue",
  type = "button",
}) => {
  const colorClasses = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    orange: "bg-orange-500 hover:bg-orange-600",
    red: "bg-red-600 hover:bg-red-700",
    gray: "bg-gray-600 hover:bg-gray-700",
  };

  const bgColorClass =
    colorClasses[buttonBackgroundColor as keyof typeof colorClasses] ||
    colorClasses.blue;

  return (
    <button
      type={type}
      onClick={action}
      className={`px-6 py-3 text-white rounded-md transition-colors ${bgColorClass}`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;