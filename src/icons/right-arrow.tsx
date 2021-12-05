interface Props {
  onClick?: () => void;
}

export function RightArrow({ ...props }: Props) {
  return (
    <svg
      {...props}
      style={{ cursor: "pointer" }}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.646 19.7849C14.6972 19.7849 18.792 15.6901 18.792 10.6389C18.792 5.58772 14.6972 1.49292 9.646 1.49292C4.5948 1.49292 0.5 5.58772 0.5 10.6389C0.5 15.6901 4.5948 19.7849 9.646 19.7849Z"
        stroke="white"
      />
      <path
        d="M5.71875 10.9231L12.5432 10.9237"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M11.0166 8.44132L13.2752 10.7928L11.0165 13.3012"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
