export default function MainPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center pb-10 lg:px-10">
      {/* Header */}
      <header className="w-full grid lg:flex justify-between items-center py-8 pl-6 lg:p-6">
        <h1 className="text-xl font-bold mb-2">CV & portefølje</h1>
        <nav className="lg:flex hidden space-x-4">
          <p>Jørgen Sørheim</p>
          <p>Portefølje</p>
          <p>Om</p>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="hidden w-full text-left py-4 lg:border-b">
        <p className="mb-2">Jørgen Sørheim</p>
        <p className="mb-2">Portefølje</p>
        <p className="mb-2">Om</p>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-6xl grid lg:grid-cols-3 grid-cols-1 gap-6 mt-6">
        {/* Left Sidebar */}
        <aside className="lg:col-span-1 hidden lg:flex flex-col text-left text-lg font-medium">
        </aside>

        {/* Center Image */}
        <section className="col-span-1 flex justify-center ">
          <img 
            src="/blackWhiteOffice.jpg" 
            alt="Sophie Eriksen" 
            className="w-full h-auto object-cover max-w-md"
          />
        </section>

        {/* Right Content */}
        <section className="col-span-1 flex flex-col justify-center lg:-ml-16 text-center lg:text-left">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight lg:relative absolute top-16 lg:top-auto pl-6 lg:pl-0">Jørgen Sørheim</h2>
          <a href="#" className="mt-4 text-black block lg:ml-12">Se arbeidet mitt &gt;&gt;</a>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col lg:flex-row justify-between items-center mt-52 text-sm text-center lg:text-left">
        <div className="flex flex-col space-y-1">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
        <p className="text-gray-600 mt-4 lg:mt-0">Ta kontakt</p>
      </footer>
    </div>
  );
}
