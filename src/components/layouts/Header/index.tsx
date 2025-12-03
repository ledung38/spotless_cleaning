import { ModeToggle } from "@/components/common/ModeToggle";
import { BellIcon, PhoneIcon } from "@/components/icons";
import { MENU_ITEMS } from "@/components/layouts/contants";
import { NavLink } from "@/components/layouts/Header/NavLink";
import {
  Button,
  NextAvatar,
  Tabs,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui";
import { useAppRouter } from "@/hooks/useAppRouter";
import useDidUpdateEffect from "@/hooks/useDidUpdateEffect";
import { Routes } from "@/lib/enum/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

// 52A7FF
// 0A84FF
// F4F4F4
export const Header = () => {
  const pathname = usePathname();

  const getActiveTabFromPathname = useCallback((path: string) => {
    const firstSegment = `/${path.split("/")[1]}`;
    return firstSegment === "/" ? Routes.HOME : firstSegment;
  }, []);

  const [active, setActive] = useState(() =>
    getActiveTabFromPathname(pathname)
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useAppRouter();

  const onChangeTab = useCallback(
    (key: string) => {
      console.log("key", key);
      setActive(key);
      navigate.push(key);
      setIsMobileMenuOpen(false);
    },
    [navigate]
  );

  const onNavigate = useCallback(
    (key: string) => {
      navigate.push(key);
      setIsMobileMenuOpen(false);
    },
    [navigate]
  );

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  useDidUpdateEffect(() => {
    setActive(getActiveTabFromPathname(pathname));
  }, [pathname, getActiveTabFromPathname]);

  // Ngăn scroll khi menu mở
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup khi component unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="text-2xl text-primary-foreground  h-20 flex bg-primary xl:px-40 sm:px-4 min-w-[1200px] fixed inset-0 z-10 shadow-sm justify-between">
      <div className="flex text-primary-foreground flex-col items-center py-2">
        <NextAvatar src="" alt="logo" />
        <p>N&T Spotless Cleaning</p>
      </div>
      <div className="hidden lg:flex items-center">
        <div className="flex gap-20 h-full text-xl">
          {MENU_ITEMS.map((item) => {
            const hasSubTabs = item.children && item.children.length > 0;
            if (hasSubTabs)
              return (
                <Tooltip key={item.key}>
                  <TooltipTrigger asChild>
                    <NavLink
                      href={`${item.key}`}
                      isActive={active === item.key}
                    >
                      {item.label}
                    </NavLink>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    sideOffset={8}
                    className="z-[1000] w-max rounded-2xl bg-white p-0 shadow-2xl"
                  >
                    <div className="py-2">
                      {item.children.map((subTab) => (
                        <div
                          key={subTab.key}
                          className="w-full h-full  text-left text-sm text-gray-700 transition-colors"
                        >
                          <NavLink
                            href={`${subTab.key}`}
                            className="px-4 py-2 hover:text-secondary"
                          >
                            {subTab.label}
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            return (
              <NavLink
                href={`${item.key}`}
                isActive={active === item.key}
                key={item.key}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2  items-center ">
        <Button
          variant={"container"}
          color="default"
          className="flex gap-2 bg-white text-primary hover:bg-accent hover:text-primary p-5 text-lg"
        >
          <PhoneIcon className="[&_path]:stroke-primary size-6" />
          <span>0968686868</span>
        </Button>
        <Button
          variant={"container"}
          color="secondary"
          className="flex gap-2 p-5 text-lg"
        >
          <BellIcon className="size-6" />
          <span>Booknow</span>
        </Button>
        <ModeToggle />
      </div>
      {/* <div className="flex align-middle"></div> */}
    </div>
  );
};
