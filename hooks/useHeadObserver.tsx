import { useEffect, useRef, useState } from "react";

function useHeadObserver() {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState("اسپرسوبار");

  function changeActiveId(id: string) {
    setActiveId(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    const handleObsever = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObsever, {
      rootMargin: "-30% 0px -60% 0px",
    });

    document.querySelectorAll(".section").forEach((head) => {
      observer.current?.observe(head);
    });

    return () => observer.current?.disconnect();
  }, []);

  return { activeId, changeActiveId };
}

export default useHeadObserver;
