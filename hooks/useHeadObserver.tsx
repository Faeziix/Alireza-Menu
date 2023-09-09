import { useEffect, useRef, useState, useTransition } from "react";

function useHeadObserver() {
  const observer = useRef<IntersectionObserver>();
  const [activeId, setActiveId] = useState("اسپرسوبار");
  const [isPending, startTransition] = useTransition();

  function changeActiveId(id: string) {
    setActiveId(id);

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
  }

  useEffect(() => {
    const handleObsever = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
          const btn = document.getElementById("btn-" + entry.target.id);
          if (btn) {
            btn.scrollIntoView({ inline: "nearest", behavior: "auto" });
          }
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
  }, []);

  return { activeId, changeActiveId };
}

export default useHeadObserver;
