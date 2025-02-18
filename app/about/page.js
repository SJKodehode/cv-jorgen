export default function AboutPage() {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center p-10">
        {/* Header */}
        <header className="w-full flex justify-between items-center text-sm">
          <div>
            <a href="/" className="font-bold">Jørgen Sørheim</a>
            <p>om</p>
          </div>
          <p className="text-sm">Jorgen.sorheim@ergosmart.no</p>
        </header>
        
        {/* Main Content */}
        <main className="w-full max-w-6xl mt-10 max-h-screen">
          <h2 className="text-4xl font-bold">Jørgen Sørheim</h2>
          <hr className="my-4 border-black" />
          
          <div className="grid grid-cols-2 gap-6 font-mono">
            {/* Left Column: Job */}
            <section>
              <h3 className="font-bold font-sans">Jobb</h3>

            </section>
            
            {/* Right Column: Skills */}
            <section>
              <h3 className="font-bold font-sans">Ferdigheter</h3>
              <p>HTML</p>
              <p className="mt-2">CSS</p>
              <ul className="list-disc pl-5">
                <li>Tailwind.css</li>
              </ul>
              <p className="mt-2">JavaScript</p>
              <ul className="list-disc pl-5">
                <li>Node.js</li>
                <li>Next.js</li>
              </ul>
            </section>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="w-full flex justify-between items-center text-sm absolute bottom-0 px-20 pb-10">
          <p>Instagram</p>
          <p>Kontakt meg</p>
        </footer>
      </div>
    );
  }
  