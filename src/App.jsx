import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Login from './pages/Login';
import Home from './pages/Home';
import Article from './pages/Article';
import Category from './pages/Category';
import SearchResult from './pages/SearchResult';
import ArticleView from './pages/ArticleView';
import NotificationAdmin from './pages/NotificationAdmin';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import EditProfile from './pages/EditProfile';
import ProfileInformation from './pages/ProfileInformation'
import WriteArticle from './pages/WriteArticle'

import { store , persistor} from "./redux/store"
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
                        <Route path="/search-result" element={<SearchResult />} />
                        <Route path="/article-view/:id" element={<ArticleView />} />
                        <Route path="/notification-admin" element={<NotificationAdmin />} />
                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/auth/register" element={<Register />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset-password" element={<ResetPassword />} />
                        <Route path="/profile/edit" element={<EditProfile />} />
                        <Route path="/profile/information" element={<ProfileInformation />} />
                        <Route path="/write-article" element={<WriteArticle />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}
