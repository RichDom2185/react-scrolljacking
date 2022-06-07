import React, { useCallback } from "react";
import { Children, ReactElement } from "react";
import { useEffect, useState } from "react";
import { ItemProps } from "./SectionItem";

type VSectionProps = {
  children: ReactElement<ItemProps> | ReactElement<ItemProps>[];
};

export const VSection: React.FC<VSectionProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => setActiveIndex(getCurrentActiveChild());

  const getCurrentActiveChild = () => {
    for (let i = Children.count(children); i > 0; i--) {
      if (getChildPosition(i) < window.innerHeight) {
        return i;
      }
    }
    return 1; // initial value
  };

  const getChildPosition = (index: number) => {
    const child = document.getElementById(`vitem-${index}`);
    return child ? child.getBoundingClientRect().top : 0;
  };

  return (
    <div className="vitem bg-gray" style={{ alignItems: "start" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          overflowY: "hidden",
          height: "100vh",
        }}
      >
        <div
          className="vsection__images"
          style={{
            transition: "transform 0.3s ease-in-out",
            transform: `translateY(${
              (-(activeIndex - 1) / Children.count(children)) * 100
            }%)`,
          }}
        >
          {Children.map(children, (child) => (
            <img className="vitem__image" src={child.props.image!} alt="" />
          ))}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

type HSectionProps = {
  leading?: React.ReactNode;
  children: React.ReactNode;
};

export const HSection: React.FC<HSectionProps> = ({ leading, children }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => setOffset(getOffset());

  const scroller = document.getElementById("hsection__scroller");
  const scrollerWidth = scroller ? scroller.scrollWidth : 0;
  const scrollerHeight = scroller ? scroller.getBoundingClientRect().height : 0;

  const getOffset = useCallback(() => {
    const container = document.getElementById("hsection__container");
    const boundingBox = container!.getBoundingClientRect();

    const scrollPosition = Math.max(-boundingBox.top, 0);
    return scrollPosition;
  }, []);

  return (
    <div
      id="hsection__container"
      style={{
        height: scrollerWidth + window.innerHeight, // for 1:1 ratio
      }}
    >
      <div // the section
        style={{
          position: "sticky",
          overflowX: "hidden",
          top: 0,
        }}
      >
        <div // force height to fill remaining space
          style={{
            height: `calc(100vh - ${scrollerHeight}px)`,
            display: "flow-root", // to prevent issues with collapsed margins
          }}
        >
          {leading}
        </div>
        <div // the scroller
          id="hsection__scroller"
          style={{
            transform: `translateX(30%) translateX(${
              // negative direction as we move right to left
              -Math.min(offset / scrollerWidth, 1) * 100
            }%)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
