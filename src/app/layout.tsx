import localFont from "next/font/local";
import "./globals.css";
import { Metadata, Viewport } from "next";
import { ErrorProvider, QueryProvider, ViewportProvider } from "@/providers";
import { Toaster } from "@/components/common/toast/toaster";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
  preload: true,
});

const creato400 = localFont({
  src: "../../public/fonts/CreatoDisplay-RegularItalic.woff2",
  variable: "--font-creato-400",
  weight: "400",
  style: "italic",
  display: "swap",
  preload: true,
});

const creato500 = localFont({
  src: "../../public/fonts/CreatoDisplay-MediumItalic.woff2",
  variable: "--font-creato-500",
  weight: "500",
  style: "italic",
  display: "swap",
  preload: true,
});

const creato700 = localFont({
  src: "../../public/fonts/CreatoDisplay-BoldItalic.woff2",
  variable: "--font-creato-700",
  weight: "700",
  style: "italic",
  display: "swap",
  preload: true,
});

const creato800 = localFont({
  src: "../../public/fonts/CreatoDisplay-ExtraBoldItalic.woff2",
  variable: "--font-creato-800",
  weight: "800",
  style: "italic",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zaply-client.vercel.app/"),
  title: "Zaply | Create Once, Spread with Zaply",
  description:
    "Zaply를 통해 콘텐츠를 한 번 만들고 여러 플랫폼에 쉽게 배포하세요. 당신의 디지털 콘텐츠 제작과 배포를 혁신적으로 바꿔드립니다.",
  manifest: "/manifest.json",
  keywords: ["Zaply", "콘텐츠 제작", "콘텐츠 배포", "디지털 마케팅"],
  icons: {
    icon: "/assets/svgs/icon.svg",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="ko">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_16_Pro_Max_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_16_Pro_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_16_Plus__iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_16__iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_16e__iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="/assets/splash/iPhone_11__iPhone_XR_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          href="/assets/splash/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          href="/assets/splash/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"
        />
      </head>
      <body
        className={`${pretendard.variable} ${creato400.variable} ${creato500.variable} ${creato700.variable} ${creato800.variable} relative max-w-[440px] mx-auto shadow-xl min-[1024px]:bg-background-pink min-[1024px]:bg-center min-[1024px]:bg-cover overflow-x-hidden overscroll-y-auto scrollbar-hide`}>
        <ViewportProvider>
          <ErrorProvider>
            <QueryProvider>
              {children}
              {modal}
              <Toaster />
            </QueryProvider>
          </ErrorProvider>
        </ViewportProvider>
      </body>
    </html>
  );
}
