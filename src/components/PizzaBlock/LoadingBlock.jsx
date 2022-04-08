import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader 
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="118" r="118" /> 
      <rect x="0" y="304" rx="6" ry="6" width="276" height="80" /> 
      <rect x="0" y="254" rx="6" ry="6" width="276" height="35" /> 
      <rect x="0" y="405" rx="6" ry="6" width="94" height="33" /> 
      <rect x="134" y="399" rx="25" ry="25" width="142" height="49" />
    </ContentLoader>
  );
}

export default LoadingBlock;
