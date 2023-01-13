import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio="none"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 732 59.858" {...props}>
    <path
      d="M956.5 649.435c-23.645 10.327-65.32 16.29-111 19.065-90.182 5.48-73.89-42-158-42-107 0-113.48 59.622-218 44.935-28-3.935-54.674-37.386-97-45-54.742-9.848-79 .065-147 23V681.5h731Z"
      transform="translate(-225 -622.142)"
      style={{
        strokeMiterlimit: 10,
      }}
    />
  </svg>
)

export default SvgComponent

