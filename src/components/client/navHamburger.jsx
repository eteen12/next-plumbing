"use client";
import React, { useState } from "react";
import classNames from "classnames";

export default function NavHamburger() {
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened(!opened);
  };

  return (
    <>
      <div
        className={classNames(`tham tham-e-squeeze tham-w-6`, {
          "tham-active": opened,
        })}
        onClick={handleToggle}
      >
        <div className="tham-box">
          <div className="tham-inner " />
        </div>
      </div>
    </>
  );
}
