import { useMemberStore } from "@/stores/memberStore";

const FACEBOOK_CLIENT_ID = process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID!;
const FACEBOOK_REDIRECT_URI = "https://api.zapply.site/v1/account/facebook/link";

const THREADS_CLIENT_ID = process.env.NEXT_PUBLIC_THREADS_CLIENT_ID!;
const THREADS_REDIRECT_URI = "https://api.zapply.site/v1/account/threads/link";

const accountController = {
  threads: async (): Promise<void> => {
    if (typeof window === "undefined") return;

    const memberId = useMemberStore.getState().memberId;
    if (!memberId) {
      throw new Error("로그인 후 시도해주세요 (memberId 없음)");
    }

    const params = new URLSearchParams({
      client_id: THREADS_CLIENT_ID,
      redirect_uri: THREADS_REDIRECT_URI,
      state: memberId.toString(),
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
    });

    const threadsUrl = `https://threads.net/oauth/authorize?${params.toString()}`;
    window.location.href = threadsUrl;
  },

  facebook: async (): Promise<void> => {
    if (typeof window === "undefined") return;

    const memberId = useMemberStore.getState().memberId;
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
};

export default accountController;
