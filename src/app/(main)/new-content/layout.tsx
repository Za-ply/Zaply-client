import ProgressBar from "./_components/ProgressBar";

export default async function NewContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
}
