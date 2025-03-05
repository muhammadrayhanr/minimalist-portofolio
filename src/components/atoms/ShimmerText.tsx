const ShimmerText = ({
  text,
  disabled = false,
  speed = 5,
  className = '',
}: {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`inline-block font-bold text-transparent ${
        disabled ? '' : 'animate-shine'
      } ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(120deg, #8fdc5f 30%, #ffffff 50%, #8fdc5f 70%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};

export default ShimmerText;
