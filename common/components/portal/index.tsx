import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "framer-motion";
import type { PropsWithChildren, FC } from "react";
import { useDataContext } from "common/context/dataLayer";

const Portal: FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const isMobile = useDataContext().device === "sm";

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <>
      {/* {mounted &&
        createPortal(
          <AnimatePresence mode="wait">{children}</AnimatePresence>,
          document.querySelector("#portal_holder") as Element
        )} */}
      {mounted && (
        <>
          {isMobile ? (
            <>{children}</>
          ) : (
            <>
              {createPortal(
                <AnimatePresence mode="wait">{children}</AnimatePresence>,
                document.querySelector("#portal_holder") as Element
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Portal;
