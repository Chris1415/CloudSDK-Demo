import { EventData, event, pageView } from "@sitecore-cloudsdk/events/browser";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
function useEvents() {
  const [eventName, triggerEvent] = useState<string>();
  const [pageViewEventName, triggerPageViewEvent] = useState<string>();
  const pathName = usePathname();

  useEffect(() => {
    if (eventName) {
      event({
        type: eventName,
        channel: "WEB",
        language: "en",
        page: pathName,
      } as EventData);
    }
  }, [eventName, pathName]);

  useEffect(() => {
    if (pageViewEventName) {
      pageView({
        type: pageViewEventName,
        channel: "WEB",
        language: "en",
        page: pathName,
      } as EventData);
    }
  }, [pageViewEventName, pathName]);

  return { triggerEvent, triggerPageViewEvent };
}
export default useEvents;
