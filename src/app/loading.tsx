export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="p-8 text-center">
        <div className="inline-block w-16 h-16 mb-6 border-t-4 border-b-4 border-blue-600 rounded-full animate-spin"></div>
        <h2 className="mb-4 text-2xl font-medium text-gray-600">로딩 중...</h2>
        <p className="text-gray-500">잠시만 기다려 주세요. 콘텐츠를 불러오고 있습니다.</p>
      </div>
    </div>
  );
}
