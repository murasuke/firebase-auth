import { VFC } from 'react';
import useAuthState from 'hooks/useAuthState';

/**
 * 表示にログインが不要なページ
 */
const PublicPage: VFC = () => {
  const { isLoading, isSignedIn, email } = useAuthState();
  if (isLoading) {
    return <p>Loadiing...</p>;
  }

  return (
    <>
      <h2>ログイン不要ページ</h2>
      <div>{isSignedIn ? `ログイン済み:${email}` : `未ログイン`}</div>
    </>
  );
};

export default PublicPage;
