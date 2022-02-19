/**
 * 認証情報取得フック
 * react-firebase-hooks/authを使いやすくするためのラッパーフック。
 * ・AuthState型のオブジェクトを返します(ログイン済みフラグ、ユーザ情報、ローディング中フラグ)
 * ・ログイン状態は`react-firebase-hooks/auth`が管理しているため、ContextやReduxは不要
 */

import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState as useAuthStateOriginal } from 'react-firebase-hooks/auth';

/**
 * useAuthState フックの戻り値の型。
 */
export type AuthState = {
  isSignedIn: boolean; // ログイン状態フラグ
  isLoading: boolean; // 読み込み中フラグ
  userId?: string;
  userName?: string;
  email?: string;
  error?: Error;
};

/**
 * useAuthState が返す初期値。
 */
const INITIAL_AUTH_STATE: AuthState = {
  isSignedIn: false,
  isLoading: true,
  userId: undefined,
  userName: undefined,
  email: undefined,
};

/**
 * ユーザーのサインイン状態を取得するためのカスタムフック。
 * react-firebase-hooks/authをラップしている。
 */
const useAuthState = (): AuthState => {
  const [authState, setAuthState] = useState(INITIAL_AUTH_STATE);
  const [user, loading, error] = useAuthStateOriginal(getAuth());
  useEffect(() => {
    if (user) {
      setAuthState({
        isSignedIn: true,
        isLoading: loading,
        userId: user.uid,
        userName: user.displayName || undefined,
        email: user.email || undefined,
        error,
      });
    } else {
      setAuthState({ ...INITIAL_AUTH_STATE, isLoading: loading });
    }
  }, [user, loading, error]);

  return authState;
};

export default useAuthState;
