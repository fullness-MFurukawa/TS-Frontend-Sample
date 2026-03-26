/**
 * List3-2 Rootレイアウト
 */
// { children } を受け取り、型にReact.ReactNodeを指定する
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        {/* 全ページ共通で表示されるヘッダー */}
        <header className="bg-blue-600 text-white p-4 font-bold">
            React&Next.jsフロントエンド開発 サンプルアプリケーション
        </header>

        {/* ここに各ページの page.tsx の内容が自動的にはめ込まれる */}
        {children}

        {/* 全ページ共通で表示されるフッター */}
        <footer className="bg-gray-200 text-center p-2 mt-8">
          © 2026 Fullness, Inc.
        </footer>
      </body>
    </html>
  );
}