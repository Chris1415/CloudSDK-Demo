import { EventData, pageView } from "@sitecore-cloudsdk/events/browser";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CHANNEL, LANGUAGE, VIEW_EVENT } from "../consts/personalization";
function useEvents() {
  const [triggerEvent] = useState<string>();
  const [pageViewEventName, triggerPageViewEvent] = useState<string>();
  const pathName = usePathname();

  useEffect(() => {
    if (pageViewEventName) {
      pageView({
        type: VIEW_EVENT,
        channel: CHANNEL,
        language: LANGUAGE,
        page: pathName,
      } as EventData);
    }
  }, [pageViewEventName, pathName]);

  return { triggerEvent, triggerPageViewEvent };
}
export default useEvents;
