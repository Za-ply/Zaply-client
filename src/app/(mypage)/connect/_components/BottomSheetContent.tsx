"use client";

import BottomSheet from "@/components/common/sheet/BottomSheet";

const BottomSheetContent = ({ platform }: { platform?: string }) => {
  const OAUTH_URLS: Record<string, string | undefined> = {
    Thread: process.env.NEXT_PUBLIC_OAUTH_URL_THREAD,
    Facebook: process.env.NEXT_PUBLIC_OAUTH_URL_FACEBOOK,
  };

  const oauthUrl = platform ? OAUTH_URLS[platform] : null;

  return (
    <BottomSheet className="h-[calc(100vh-60px)]">
      {oauthUrl ? (
        <iframe
          src={oauthUrl}
          width="100%"
          height="100%"
          className="w-full h-full rounded-md border-none"
          allow="camera; microphone; clipboard-write"
        />
      ) : (
        <div className="text-center text-gray-500">지원하지 않는 플랫폼입니다.</div>
      )}
    </BottomSheet>
  );
};

export default BottomSheetContent;
