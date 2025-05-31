import ProgressBar from "./_components/common/ProgressBar";

export default async function NewContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
}
