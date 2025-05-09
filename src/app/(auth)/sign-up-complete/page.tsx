"use client";

import { Container } from "@/components";
import { Button } from "@/components/common/button";
import { ArrowIcon } from "@/components/icons";
import { motion } from "framer-motion";
import { fadeUpVariants, transition } from "./_animation";
import { useRouter } from "next/navigation";

export default function SignInCompletePage() {
  const router = useRouter();

  return (
    <Container className="bg-center bg-cover bg-backgroundLine-yellow">
      <div className="flex flex-col justify-between min-h-real-screen pb-[56px]">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={transition}
          className="flex flex-col items-center justify-center pt-[253px] gap-4 text-blue-blueblack">
          <p className="text-center whitespace-pre-line text-h3 ">{`회원가입이\n완료되었습니다.`}</p>
          <p className="text-center whitespace-pre-line text-b2R">{`계정을 연결하고 나의 콘텐츠를\n더 많은 곳으로 퍼트려보세요!`}</p>
        </motion.div>
        <motion.div className="flex flex-col items-center justify-center gap-3">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.3 }}
            className="w-full">
            <Button
              variant={"subAction"}
              onClick={() => router.push("/")}
              className="border border-grayscale-300">
              <p className="text-button1">건너뛰기</p>
            </Button>
          </motion.div>
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.5 }}
            className="w-full">
            <Button variant={"active"} onClick={() => null} rightIcon={<ArrowIcon type="right" />}>
              <p className="text-button1">계정 연결하기</p>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Container>
  );
}
