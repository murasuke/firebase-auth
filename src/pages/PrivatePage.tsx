import { VFC } from 'react';
import useAuthState from 'hooks/useAuthState';

/**
 * 表示にログインを必要とするページ
 */
const PrivatePage: VFC = () => {
  const { isLoading, email } = useAuthState();
  if (isLoading) {
    return <p>Loadiing...</p>;
  }

  return (
    <>
      <h2>ログインが必要なページ</h2>
      <div>{email}</div>
    </>
  );
};

export default PrivatePage;
