// hooks/useFetchMemberInfo.ts
import { useEffect } from "react";
import memberService from "@/lib/api/service/MemberService";
import useUserStore from "@/stores/userStore";

const useFetchMemberInfo = () => {
  const setUserInfo = useUserStore(state => state.setUserInfo);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await memberService.getMemberInfo();
        if (res.result === "SUCCESS" && res.data) {
          setUserInfo(res.data);
        } else {
          console.error("회원 정보를 가져오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("회원 정보 요청 중 오류 발생:", error);
      }
    };

    fetchUserInfo();
  }, [setUserInfo]);
};

export default useFetchMemberInfo;
