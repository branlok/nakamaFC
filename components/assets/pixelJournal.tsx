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
    <path d="M19 2v18h-1v1H4v-1H3v-2H1v-2h2v-4H1v-2h2V6H1V4h2V2h1V1h14v1h1m-5 7h-1V8h-1v1h-1v1h-1V3H7v16h10V3h-2v7h-1V9M3 4v2h2V4H3m2 6H3v2h2v-2m0 6H3v2h2v-2Z" />
  </svg>
)

export default SvgComponent
