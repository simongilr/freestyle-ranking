import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-4 hidden md:flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-600 mb-8">RankingApp</h1>
            <nav className="space-y-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-lg hover:bg-blue-100 text-gray-700 font-medium"
              >
                🏆 Ranking
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-lg hover:bg-blue-100 text-gray-700 font-medium"
              >
                👥 Participantes
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-lg hover:bg-blue-100 text-gray-700 font-medium"
              >
                ⚙️ Configuración
              </a>
            </nav>
          </div>

          <div className="text-sm text-gray-500 mt-6">
            © {new Date().getFullYear()} RankingApp
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <header className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
            <div className="flex items-center gap-3">
              <span className="text-gray-600">Hola, Admin</span>
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                A
              </div>
            </div>
          </header>

          {/* Page content */}
          <section>{children}</section>
        </main>
      </body>
    </html>
  );
}
