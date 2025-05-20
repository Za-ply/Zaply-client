import { SnsType, UnlinkResponse } from "../model/account";
import { apiClient } from "../axios/instance";
import useUserStore from "@/stores/userStore";

const FACEBOOK_CLIENT_ID = process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID!;
const FACEBOOK_REDIRECT_URI = "https://api.zapply.site/v1/account/facebook/link";

const THREADS_CLIENT_ID = process.env.NEXT_PUBLIC_THREADS_CLIENT_ID!;
const THREADS_REDIRECT_URI = "https://api.zapply.site/v1/account/threads/link";

const accountController = {
  threads: async (): Promise<void> => {
    if (typeof window === "undefined") return;

    const memberId = useUserStore.getState().userInfo?.memberId;
    if (!memberId) {
      throw new Error("로그인 후 시도해주세요 (memberId 없음)");
    }

    const params = new URLSearchParams({
      client_id: THREADS_CLIENT_ID,
      redirect_uri: THREADS_REDIRECT_URI,
      scope: [
        "threads_basic",
        "threads_content_publish",
        "threads_manage_replies",
        "threads_manage_insights",
        "threads_read_replies",
        "threads_manage_mentions",
        "threads_keyword_search",
        "threads_delete",
      ].join(","),
      response_type: "code",
      state: memberId.toString(),
    });

    const threadsUrl = `https://threads.net/oauth/authorize?${params.toString()}`;
    window.open(threadsUrl, "_blank", "width=600,height=800");
  },

  facebook: async (): Promise<void> => {
    if (typeof window === "undefined") return;

    const memberId = useUserStore.getState().userInfo?.memberId;
    if (!memberId) {
      throw new Error("로그인 후 시도해주세요 (memberId 없음)");
    }

    const params = new URLSearchParams({
      client_id: FACEBOOK_CLIENT_ID,
      redirect_uri: FACEBOOK_REDIRECT_URI,
      scope: "email",
      state: memberId.toString(),
    });

    const facebookUrl = `https://www.facebook.com/v22.0/dialog/oauth?${params.toString()}`;
    window.location.href = facebookUrl;
  },

  unlink: async (snsType: SnsType): Promise<UnlinkResponse> => {
    const response = await apiClient.get<UnlinkResponse>(`/account/${snsType}/unlink`);
    return response.data;
  },
};

export default accountController;
