import { personalize } from "@sitecore-cloudsdk/personalize/browser";
import { useState, useEffect } from "react";
function usePersonalization<T>(friendlyId: string, personalizeable: boolean) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const doPersonalize = async () => {
      try {
        const personalization = await personalize({
          friendlyId: friendlyId,
          channel: "WEB",
        });
        setData(personalization as T);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (e: any) {
        console.log("Personalization failed..." + e.message);
      }
    };
    if (personalizeable) {
      doPersonalize();
    }
  }, [friendlyId, personalizeable]);
  return { data };
}
export default usePersonalization;
