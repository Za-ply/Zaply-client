import LoginBottomSheet from "./LoginBottomSheet";

const BottomSheetContent = ({ platform }: { platform?: string }) => {
  return (
    <LoginBottomSheet>
      {platform === "Thread" ? (
        <div>스레드 로그인</div>
      ) : platform === "Facebook" ? (
        <div>페이스북 로그인</div>
      ) : (
        <div>인스타그램 로그인</div>
      )}
    </LoginBottomSheet>
  );
};

export default BottomSheetContent;
