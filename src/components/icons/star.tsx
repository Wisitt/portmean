import { SVGProps } from "react";

const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 126 126"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M59.0322 4.10327C59.6264 -0.555157 66.3736 -0.555151 66.9678 4.10328L72.7907 49.7477C73.0213 51.5554 74.4446 52.9787 76.2524 53.2093L121.897 59.0322C126.555 59.6264 126.555 66.3736 121.897 66.9678L76.2523 72.7907C74.4446 73.0213 73.0213 74.4446 72.7907 76.2524L66.9678 121.897C66.3736 126.555 59.6264 126.555 59.0322 121.897L53.2093 76.2523C52.9787 74.4446 51.5554 73.0213 49.7476 72.7907L4.10327 66.9678C-0.555157 66.3736 -0.555151 59.6264 4.10328 59.0322L49.7477 53.2093C51.5554 52.9787 52.9787 51.5554 53.2093 49.7476L59.0322 4.10327Z"
      fill="white"
    />
  </svg>
);

export default Star;
