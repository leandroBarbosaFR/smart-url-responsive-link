import React, { useState } from "react";
import { Copy } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";
import { truncateUrl } from "../utils/truncateUrl";

interface SmartLinkProps {
  url: string;
  maxLength?: number;
  truncateOnMobile?: boolean;
  tooltip?: boolean;
  copyable?: boolean;
  showIcon?: boolean;
  className?: string;
}

export const SmartLink: React.FC<SmartLinkProps> = ({
  url,
  maxLength = 40,
  truncateOnMobile = true,
  tooltip = false,
  copyable = false,
  showIcon = false,
  className = "",
}) => {
  const isMobile = useIsMobile();
  const displayText =
    truncateOnMobile && isMobile ? truncateUrl(url, maxLength) : url;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={tooltip ? url : undefined}
        className="text-blue-600 hover:underline truncate whitespace-nowrap overflow-hidden max-w-full inline-block"
      >
        {displayText}
        {showIcon && <span className="ml-1">↗</span>}
      </a>
      {copyable && (
        <button
          onClick={handleCopy}
          type="button"
          aria-label="Copy link"
          title={copied ? "Copied!" : "Copy link"}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <Copy size={16} strokeWidth={1.75} />
        </button>
      )}
    </span>
  );
};
