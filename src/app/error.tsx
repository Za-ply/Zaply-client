"use client";

import { useError } from "@/providers/provider-error";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { setError } = useError();

  useEffect(() => {
    setError(true);
    return () => setError(false);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 text-center">
        <h1 className="mb-4 text-6xl font-bold text-red-600">오류 발생</h1>
        <h2 className="mb-6 text-2xl font-medium text-gray-600">예상치 못한 오류가 발생했습니다</h2>
        <p className="mb-8 text-gray-500">
          죄송합니다. 문제가 발생했습니다. 다시 시도하거나 홈으로 돌아가세요.
        </p>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <button
            onClick={() => reset()}
            className="px-6 py-3 text-white transition-colors bg-red-600 rounded-md hover:bg-red-700">
            다시 시도
          </button>
          <Link
            href="/"
            className="px-6 py-3 text-white transition-colors bg-gray-600 rounded-md hover:bg-gray-700">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
