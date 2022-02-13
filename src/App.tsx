import { VFC } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import HomePage from './pages/HomePage';
import PublicPage from './pages/PublicPage';
import PrivatePage from './pages/PrivatePage';
import LoginPage from './pages/LoginPage';
import './App.css';

/**
 * ルート定義
 * / トップページ。ログインしていると「ログアウト」ボタンを表示する
 * /public ログイン不要ページ
 * /private ログインが必要なページ(未ログインの場合、ログイン画面が表示される。ログイン後にリダイレクト)
 * /signin ログインページ
 */
const App: VFC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/public" element={<PublicPage />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <PrivatePage />
            </RequireAuth>
          }
        />
        <Route path="/signin" element={<LoginPage moveTo="/" />} />
      </Routes>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
    </div>
  );
};

export default App;
