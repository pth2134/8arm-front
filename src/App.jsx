import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecruitmentForm from './RecruitmentForm';
import RecruitmentDetail from './RecruitmentDetail'; // 임포트한 RecruitmentDetail 컴포넌트
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import ChatRoom from './components/chat/ChatRoom';

function App() {
    return (
        <Router>
            <Routes>
                {/* 메인 페이지로 접근했을 때 보여줄 컴포넌트 */}
                <Route path="/" element={<RecruitmentForm />} />
                {/* 상세 페이지의 경로와 매칭될 컴포넌트 */}
                <Route path="/recruitments/detail/:id" element={<RecruitmentDetail />} />
                {/* 회원가입 페이지 */}
                <Route path="/register" element={<RegisterPage />} />
                {/* 로그인 페이지 */}
                <Route path="/login" element={<LoginPage />} />
                {/* 다른 모든 경로에 대한 처리. 404 페이지나 메인 페이지 리다이렉트 등의 로직을 추가할 수 있습니다. */}
                <Route path="/chat/chat-room/:roomId" element={<ChatRoom />} />
            </Routes>
        </Router>
    );        
}

export default App;
