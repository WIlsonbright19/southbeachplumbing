/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = "", style }) => {
  return (
    <div
      className={`animate-pulse rounded-2xl ${className}`}
      style={{
        backgroundColor: "var(--muted)",
        ...style,
      }}
      aria-hidden="true"
    />
  );
};
