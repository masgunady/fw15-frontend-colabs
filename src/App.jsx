import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Login from './pages/Login';
import Home from './pages/Home';
import Article from './pages/Article';
import Category from './pages/Category';
import ArticleByCategory from './pages/ArticleByCategory';
import SearchResult from './pages/SearchResult';
import ArticleView from './pages/ArticleView';
import ArticleViewAdmin from './pages/ArticleViewAdmin';
import NotificationAdmin from './pages/NotificationAdmin';
import NotificationUser from './pages/NotificationUser';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import ProfileInformation from './pages/ProfileInformation';
import EditProfile from './pages/EditProfile';
import SavedPost from './pages/SavedPost'
import WriteArticle from './pages/WriteArticle';
import WaitingList from './pages/WaitingList';
import About from './pages/About'
import EditArticle from './pages/EditArticle'
import PrivateRoute from './components/PrivateRoute'


import { store, persistor } from "./redux/store"
import ScrollToTop from './components/ScrollToTop';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/article" element={<Article />} />
                        <Route path="/category" element={<Category />} />
                        <Route path="/article-by-category" element={<ArticleByCategory />} />
                        <Route path="/search-result" element={<SearchResult />} />
                        <Route path="/article-view/:id" element={<ArticleView />} />
                        <Route path="/admin/article-view/:id" element={<ArticleViewAdmin />} />
                        <Route path="/admin/notification-admin" element={<NotificationAdmin />} />
                        <Route path="/user/notification-user" element={<NotificationUser />} />
                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/auth/register" element={<Register />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset-password" element={<ResetPassword />} />

                        <Route path="/profile-information/:id"
                            element={
                                <PrivateRoute>
                                    <ProfileInformation />
                                </PrivateRoute>} />

                        <Route path="/profile/edit"
                            element={
                                <PrivateRoute>
                                    <EditProfile />
                                </PrivateRoute>} />
                        <Route path="/profile/saved-post" element={
                            <PrivateRoute>
                                <SavedPost />
                            </PrivateRoute>
                        } />
                        <Route path="/write-article" element={
                            <PrivateRoute>
                                <WriteArticle />
                            </PrivateRoute>
                        } />
                        <Route path="/waiting-list" element={<WaitingList />} />
                        <Route path="/edit-article/:id" element={
                            <PrivateRoute>
                                <EditArticle />
                            </PrivateRoute>
                        } />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}
