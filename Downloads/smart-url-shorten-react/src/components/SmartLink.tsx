import React from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { truncateUrl } from "../utils/truncateUrl";

interface SmartLinkProps {
  url: string;
  maxLength?: number;
  truncateOnMobile?: boolean;
  showIcon?: boolean;
}

export const SmartLink: React.FC<SmartLinkProps> = ({
  url,
  maxLength = 40,
  truncateOnMobile = true,
  showIcon = false,
}) => {
  const isMobile = useIsMobile();
  const displayText = truncateOnMobile && isMobile ? truncateUrl(url, maxLength) : url;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {displayText}
      {showIcon && <span style={{ marginLeft: 4 }}>↗</span>}
    </a>
  );
};
