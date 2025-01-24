import { personalize } from '@sitecore-cloudsdk/personalize/browser';
import { useState, useEffect } from 'react';
function usePersonalization<T>(friendlyId: string){
  const [data, setData] = useState<T>();

  useEffect(() => {
    const doPersonalize = async () => {
        const personalization = (await personalize({
            friendlyId: friendlyId,
            channel: "WEB",
          }));

          setData(personalization as T);
    };
    doPersonalize();
  }, [friendlyId]);
  return { data };
};
export default usePersonalization;