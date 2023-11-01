import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 250 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="265" rx="11" ry="11" width="250" height="25" /> 
    <rect x="0" y="306" rx="26" ry="26" width="250" height="76" /> 
    <rect x="129" y="396" rx="14" ry="14" width="113" height="39" /> 
    <rect x="0" y="400" rx="14" ry="14" width="103" height="32" /> 
    <circle cx="126" cy="120" r="115" />
  </ContentLoader>
)

export default Skeleton;