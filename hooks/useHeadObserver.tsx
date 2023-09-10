import { useEffect, useRef, useState } from "react";

function useHeadObserver() {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState("اسپرسوبار");
  const [shouldUpdateActive, setShouldUpdateActive] = useState(true);

  function changeActiveId(id: string) {
    setActiveId(id);

    const element = document.getElementById(id);
    if (element) {
      setShouldUpdateActive(false);
      element.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setShouldUpdateActive(true);
    }, 1000);
  }

  useEffect(() => {
    const handleObsever = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && shouldUpdateActive) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "-50% 0px -50% 0px",
    });

    document.querySelectorAll(".section").forEach((head) => {
      observer.current?.observe(head);
    });

    return () => observer.current?.disconnect();
  }, [shouldUpdateActive]);

  return { activeId, changeActiveId, setShouldUpdateActive };
}

export default useHeadObserver;
