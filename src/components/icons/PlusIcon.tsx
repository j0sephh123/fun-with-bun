type Props = {
  onClick: VoidFunction;
};

// decouple button and svg
export default function PlusIcon({ onClick }: Props) {
  return (
    <button onClick={onClick} className="btn btn-primary">
      Create Project
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </button>
  );
}
