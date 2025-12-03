import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

// FFD60A
export const NavLink = ({
  className,
  isActive,
  ...props
}: React.ComponentProps<typeof Link> & { isActive?: boolean }) => {
  return (
    <div className="nav-link relative flex items-center">
      <Link
        {...props}
        className={cn(
          "transition-colors duration-500",
          // pseudo element mặc định ẩn
          "before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-0 before:bg-secondary before:content-[''] before:transition-all before:duration-500 before:ease-in-out",
          // hover effect: hiện thanh vàng từ giữa ra
          "hover:before:left-0 hover:before:w-full hover:text-secondary",
          // active state
          isActive && "text-secondary before:left-0 before:w-full",
          className
        )}
      >
        {props.children}
      </Link>
    </div>
  );
};
