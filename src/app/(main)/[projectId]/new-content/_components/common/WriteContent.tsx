"use client";

import { useEffect, useRef, useState } from "react";
import useFocus from "../hooks/useFocus";
import { cn } from "@/utils";
import { LinkIcon, Textarea } from "@/components";
import { useContentMakeStore } from "../store/content-make-store";
import { useDebounce } from "@/hooks";
import { Platforms } from "@/types/platform";
import { toast } from "@/utils/useToast";

interface WriteContentProps {
  type: "upload" | "content";
  maxContentLength: number;
  transferPrompt?: string;
}

const WriteContent = ({ type, maxContentLength, transferPrompt }: WriteContentProps) => {
  const { postData, setContent, selectedContentPlatform } = useContentMakeStore();

  const [contentLength, setContentLength] = useState<number>(0);
  const [content, setContentState] = useState(
    type === "upload" ? postData.content : transferPrompt
  );

  const ref = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isFocused = useFocus(ref);
  const debouncedSetContent = useDebounce(setContent, 1000);

  useEffect(() => {
    if (transferPrompt) {
      setContentState(transferPrompt);
    }
  }, [transferPrompt]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setContentState(value);
    setContentLength(value.length);
    debouncedSetContent(value);
  };

  useEffect(() => {
    if (type === "upload") {
      setContentState(postData.content);
      setContentLength(postData.content.length);
    }
    if (type === "content" && transferPrompt) {
      setContentState(transferPrompt);
      setContentLength(transferPrompt.length);
    }
  }, [postData.content, transferPrompt]);

  const unreadyPlatform =
    type === "content" &&
    (selectedContentPlatform === Platforms.X || selectedContentPlatform === Platforms.LINKEDIN);

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl bg-grayscale-200 border border-grayscale-200 h-[220px] overflow-hidden",
        {
          "bg-grayscale-100 border border-grayscale-700": isFocused,
          "p-5 h-[220px]": !unreadyPlatform,
          "px-5 pt-5 pb-[47px] h-[267px]": unreadyPlatform,
        }
      )}>
      <div className="relative">
        <Textarea
          ref={textareaRef}
          maxLength={maxContentLength}
          value={content}
          onChange={handleInput}
          placeholder={`내용을 작성해주세요. 이 내용을 기준으로 다른 플랫폼에\n 올라갈 콘텐츠가 자동으로 변환됩니다.`}
          className="min-h-[147px] resize-none placeholder:whitespace-pre-line pr-1 mb-[23px] overflow-y-auto scrollbar-thin scrollbar-thumb-grayscale-400 scrollbar-track-transparent"
        />
        <span className="absolute -bottom-[20px] right-0 text-b4M text-grayscale-600">
          {contentLength.toLocaleString("ko-KR")}/{maxContentLength.toLocaleString("ko-KR")}
        </span>
      </div>
      {unreadyPlatform && (
        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(content as string);
            toast({
              variant: "check",
              description: "컨텐츠가 복사되었습니다.",
              duration: 1000,
            });
          }}
          className="flex items-center justify-center gap-1 w-full h-[47px] bg-grayscale-100 border border-grayscale-300 rounded-lg text-button2 text-blue-700">
          <span className="text-grayscale-600">
            {selectedContentPlatform === Platforms.X ? "X" : "링크드인"}에 올릴
          </span>
          내용 복사하기
          <LinkIcon />
        </button>
      )}
    </div>
  );
};

export default WriteContent;
