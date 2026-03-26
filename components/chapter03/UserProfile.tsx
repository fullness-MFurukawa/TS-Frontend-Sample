export default function UserProfile() {
  // TypeScriptの変数
  const userName = "フルネス 太郎";
  const userAge = 25;

  return (
    <div className="profile-card">
      {/* 波括弧 { } の中身はJSとして評価される */}
      <h2>名前: {userName}</h2>
      <p>年齢: {userAge}歳</p>
      <p>来年は {userAge + 1}歳 になります。</p>
    </div>
  );
}