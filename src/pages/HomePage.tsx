import { VFC } from 'react';
import { getAuth } from 'firebase/auth';

import { useAuthState } from 'hooks/useAuthState';
import { NavLink } from 'react-router-dom';

/**
 * トップページ。各画面へのリンクと、ログアウト機能。
 * @returns
 */
const HomePage: VFC = () => {
  const authState = useAuthState();

  if (authState.isLoading) {
    return <p>Loadiing...</p>;
  }

  return (
    <>
      <h2>React Router(V6)＋Firebases AuthUIサンプル</h2>
      <div>
        {authState.isSignedIn ? (
          <>
            ようこそ {authState.email}：
            <button onClick={() => getAuth().signOut()}>ログアウト</button>
          </>
        ) : (
          <>ログインしていません</>
        )}
      </div>
      <ul style={{ margin: '1rem' }}>
        <li>
          <NavLink to="/public">ログイン不要ページ</NavLink>
        </li>
        <li>
          <NavLink to="/private">ログインが必要なページ</NavLink>
          <br />
          (ログインページ表示後にページ遷移)
        </li>
        <li>
          {authState.isSignedIn ? null : (
            <NavLink to="/signin">ログインページ</NavLink>
          )}
        </li>
      </ul>
    </>
  );
};

export default HomePage;
