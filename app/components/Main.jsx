export default function MainPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center pb-10 pl-10 pr-10">
      {/* Header */}
      <header className="w-full grid justify-between flex-row items-center p-6">
        <h1 className="text-xl font-bold">CV & portefølje</h1>
        <p className="mb-4">Jørgen Sørheim</p>
          <p className="mb-4">Portefølje</p>
          <p className="mb-4">Om</p>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl grid grid-cols-3 gap-6 mt-6">
        {/* Left Sidebar */}
        <aside className="col-span-1 flex flex-col text-left text-lg font-medium">
          
        </aside>

        {/* Center Image */}
        <section className="col-span-1">
          <img 
            src="/blackWhiteOffice.jpg" 
            alt="Sophie Eriksen" 
            className="w-full h-auto object-cover"
          />
        </section>

        {/* Right Content */}
        <section className="col-span-1 flex flex-col justify-center -ml-16">
          <h2 className="text-6xl font-bold leading-tight">Jørgen Sørheim</h2>
          <a href="#" className="mt-4 ml-12 text-black ">Se arbeidet mitt &gt;&gt;</a>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full flex justify-between items-center mt-20 text-sm">
        <div className="flex flex-col space-y-1">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
        <p className="text-gray-600">Ta kontakt</p>
      </footer>
    </div>
  );
}
