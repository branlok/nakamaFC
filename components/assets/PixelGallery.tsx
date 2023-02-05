import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14 6h2v1h1v2h-1v1h-2V9h-1V7h1V6M2 2h18v1h1v12h-1v1h-7v2h2v2H7v-2h2v-2H2v-1H1V3h1V2m1 2v5h1V8h1V7h1V6h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h4V4H3m7 7H9v-1H8V9H6v1H5v1H4v1H3v2h9v-1h-1v-1h-1v-1Z" />
  </svg>
)

export default SvgComponent
