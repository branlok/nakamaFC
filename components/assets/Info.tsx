import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm9.25-1a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-7ZM14 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
    />
  </svg>
)

export default SvgComponent
