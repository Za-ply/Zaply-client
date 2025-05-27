"use client";

import { useEffect, useRef, useState } from "react";
import useFocus from "../hooks/useFocus";
import { cn } from "@/utils";
import { Textarea } from "@/components";
import { useContentMakeStore } from "../store/content-make-store";
import { useDebounce } from "@/hooks";

interface WriteContentProps {
  type: "upload" | "content";
  maxContentLength: number;
  transferPrompt?: string;
}

const WriteContent = ({ type, maxContentLength, transferPrompt }: WriteContentProps) => {
  const { postData, setContent } = useContentMakeStore();

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
  }, [postData.content]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative p-5 rounded-xl bg-grayscale-200 border border-grayscale-200 h-[200px] overflow-hidden",
        {
          "bg-grayscale-100 border border-grayscale-700": isFocused,
        }
      )}>
      <Textarea
        ref={textareaRef}
        maxLength={maxContentLength}
        value={content}
        onChange={handleInput}
        placeholder={`내용을 작성해주세요. 이 내용을 기준으로 다른 플랫폼에\n 올라갈 콘텐츠가 자동으로 변환됩니다.`}
        className="min-h-[147px] resize-none placeholder:whitespace-pre-line pr-1 mb-[23px]"
      />
      <span className="absolute bottom-[10px] right-4 text-b4M text-grayscale-600">
        {contentLength.toLocaleString("ko-KR")}/{maxContentLength.toLocaleString("ko-KR")}
      </span>
    </div>
  );
};

export default WriteContent;
