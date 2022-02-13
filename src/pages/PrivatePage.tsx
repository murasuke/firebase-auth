import { VFC } from 'react';
import { useAuthState } from '../hooks/useAuthState';

/**
 * 表示にログインを必要とするページ
 */
const PrivatePage: VFC = () => {
  const authState = useAuthState();
  return (
    <>
      <h2>ログインが必要なページ</h2>
      <div>{authState.email}</div>
    </>
  );
};

export default PrivatePage;
