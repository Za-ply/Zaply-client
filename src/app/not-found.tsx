import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
        <h2 className="mb-6 text-2xl font-medium text-gray-600">페이지를 찾을 수 없습니다</h2>
        <p className="mb-8 text-gray-500">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <Link
          href="/"
          className="px-6 py-3 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
