"use client";
import { Button } from "@headlessui/react";

export default function ResetSessionButton() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function resetSession(e: any) {
    // IMPLEMENT COOKIE ACCESS AND DELETION OF SPECIFIC COOKIE AND RELOAD TO INITITATE A NEW SESSION
    console.log(e);
  }
  return (
    <>
      <Button
        onClick={(e) => resetSession(e)}
        className="text-sm/6 font-semibold text-white"
      >
        Reset Session <span aria-hidden="true">&rarr;</span>
      </Button>
    </>
  );
}
