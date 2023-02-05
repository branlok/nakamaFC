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
    <path d="M17 10v2h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1H4v-2h9V9h-1V8h-1V6h2v1h1v1h1v1h1v1" />
  </svg>
)

export default SvgComponent
