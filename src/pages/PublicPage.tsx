import { VFC } from 'react';
import { useAuthState } from '../hooks/useAuthState';

/**
 * 表示にログインが不要なページ
 */
const PublicPage: VFC = () => {
  const authState = useAuthState();
  return (
    <>
      <h2>ログイン不要ページ</h2>
      <div>
        {authState.isSignedIn
          ? `ログイン済み:${authState.email}`
          : `未ログイン`}
      </div>
    </>
  );
};

export default PublicPage;
