import Main from "@/components/Main";
export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <Main />
        <div className="container mx-auto glass">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center">Note</h1>
            <p className="text-center">The website is under development.</p>
          </div>
        </div>
      </div>
    </>
  );
}
