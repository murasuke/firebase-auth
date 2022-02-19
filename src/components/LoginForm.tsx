import { VFC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  EmailAuthProvider,
  // FacebookAuthProvider,
  // GoogleAuthProvider,
  // TwitterAuthProvider,
} from 'firebase/auth';
import { auth } from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// ログインフォームの設定(メール認証以外にも複数設定可能)
//   複数選択した場合は、ログイン方法の選択画面が表示されます。
const uiConfig: auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    // FacebookAuthProvider.PROVIDER_ID,
    // GoogleAuthProvider.PROVIDER_ID,
    // TwitterAuthProvider.PROVIDER_ID,
  ],
  // signInSuccessUrl:"", リダイレクト(reactアプリのリロード)が発生するため利用しない
};

/**
 * react-firebaseuiを利用したログインフォーム
 */
const LoginForm: VFC<{ moveTo?: string }> = ({ moveTo }) => {
  const navigate = useNavigate();
  // signInSuccessUrlを設定すると、リダイレクトが発生してReact自体がリロードしてしまう。
  // ⇒リダイレクト防止のため、navigateで遷移する。
  //   <RequireAuth>で認証のチェックをしている場合は、useAuthState()フックでコンポーネントが切り替わるため、callbackでの切り替え不要(moveToを空白にしておく)
  const callbacks: auth.Config['callbacks'] = {
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      if (moveTo) {
        navigate(moveTo);
      }
      return false;
    },
  };

  // ログイン画面(react-firebaseui)
  return (
    <StyledFirebaseAuth
      firebaseAuth={getAuth()}
      uiConfig={{ ...uiConfig, callbacks }}
    />
  );
};

export default LoginForm;
