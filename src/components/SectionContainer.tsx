import React from "react";
import { Children, ReactElement } from "react";
import { useEffect, useState } from "react";

type VSectionProps = {
  children: React.ReactNode;
};

export const VSection: React.FC<VSectionProps> = (props) => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (e: Event) => {
    // console.log(e);
    // console.log(getWindowPosition());
    // console.log(getChildPosition(1), getChildPosition(2), getChildPosition(3));
    // console.log(`${getCurrentActiveChild()} is active`);
    setActiveIndex(getCurrentActiveChild());
  };

  const getCurrentActiveChild = () => {
    for (let i = Children.count(props.children); i > 0; i--) {
      if (getChildPosition(i) < window.innerHeight) {
        return i;
      }
    }
    return 1;
  };

  const getChildPosition = (index: number) => {
    const child = document.getElementById(`vitem-${index}`);
    return child ? child.getBoundingClientRect().top : 0;
  };

  // const getWindowPosition = () => {
  //   return window.scrollY || document.documentElement.scrollTop;
  // };

  return (
    <>
      <div className="vitem" style={{ alignItems: "start" }}>
        {/* {Children.map(props.children, (child, index) => {
          const imageSrc = (child as ReactElement).props.image;
          return (
            index + 1 === activeIndex &&
            imageSrc && (
              <div style={{ position: "sticky", top: 0, alignSelf: "start" }}>
                <img className="vitem__image" src={imageSrc} alt="Decoration" />
              </div>
            )
          );
        })} */}

        <div
          style={{
            position: "sticky",
            top: 0,
            alignSelf: "start",
            overflow: "hidden",
            height: "100vh",
            // objectPosition: "top",
          }}
          className="vsection__images"
        >
          <div
            className="vsection__images"
            style={{
              transition: "transform 0.3s ease-in-out",
              transform: `translateY(${
                (-(activeIndex - 1) / Children.count(props.children)) * 100
              }%)`,
            }}
          >
            {Children.map(props.children, (child, index) => {
              const imageSrc = (child as ReactElement).props.image;
              return (
                imageSrc && (
                  <img
                    className="vitem__image"
                    src={imageSrc}
                    alt="Decoration"
                  />
                )
              );
            })}
          </div>
        </div>

        {/* {Children.map(props.children, (child, index) => {
          const childContents = (child as ReactElement).props.children;
          return (
            index + 1 === activeIndex && (
              <div className="vitem__text">{childContents}</div>
            )
          );
        })} */}
        <div>{props.children}</div>
      </div>
    </>
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

  const handleScroll = (e: Event) => {
    // console.log(getWindowPosition());
    // console.log(scrollerWidth);
    setOffset(getWindowPosition());
  };

  const scroller = document.getElementById("hsection__scroll");
  const scrollerWidth = scroller ? scroller.scrollWidth : 0;
  const scrollerHeight = scroller ? scroller.getBoundingClientRect().height : 0;

  const getWindowPosition = () => {
    const container = document.getElementById("hsection__container");
    const boundingBox = container?.getBoundingClientRect();
    if (boundingBox) {
      // return boundingBox.bottom < window.innerHeight
      //   ? -scrollerWidth
      //   : boundingBox.top;
      return -boundingBox.top;
    }
    return 0;
  };

  const max = (a: number, b: number) => (a > b ? a : b);

  return (
    <div
      id="hsection__container"
      style={{
        height: scrollerWidth + window.innerHeight,
        display: "grid",
      }}
    >
      <div
        style={{
          position: "sticky",
          overflowX: "hidden",
          top: 0,
          alignSelf: "start",
        }}
      >
        <div
          style={{
            height: `calc(100vh - ${scrollerHeight}px)`,
            display: "flow-root",
          }}
        >
          {leading}
        </div>
        <div
          id="hsection__scroll"
          className="hsection"
          style={{
            transform: `translateX(30%) translateX(${
              // transform: `translateX(${
              max(-max(offset, 0) / scrollerWidth, -1) * 100
            }%)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
