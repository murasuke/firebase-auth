import { VFC } from 'react';
import LoginForm from 'components/LoginForm';

/**
 * ログインページ
 * ・ログイン後に表示するパスを引数で受け取る
 */
const LoginPage: VFC<{ moveTo?: string }> = ({ moveTo }) => {
  return (
    <div style={{ margin: '1rem' }}>
      <h2>ログインページ</h2>
      <LoginForm moveTo={moveTo} />
    </div>
  );
};

export default LoginPage;
