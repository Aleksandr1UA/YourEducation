import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import AllVideo from './components/header/VideoLibrary/AllVideo';
import SchoolProgram from './components/header/VideoLibrary/SchoolProgram';
import Subjects from './components/header/VideoLibrary/Subjects';
import SchoolClasses from './components/header/VideoLibrary/SchoolClasses';
import AdditionalMaterials from './components/header/VideoLibrary/AdditionalMaterials';
import SchoolSubscription from './components/header/VideoLibrary/SchoolSubscription';
import AcademyProgram from './components/header/VideoLibrary/AcademyProgram';
import HomePage from './components/header/HomePage';
import OnlineSchool from './components/header/EducationCenter/OnlineSchool';
import OnlineCourse from './components/header/EducationCenter/OnlineCourse';
import OnlineEducation from './components/header/EducationCenter/OnlineEducation';
import OnlineAcademy from './components/header/EducationCenter/OnlineAcademy';
import OnlineUniversity from './components/header/EducationCenter/OnlineUniversity';
import YourEducation from './components/header/AboutUs/YourEducation';
import OurPhilosophy from './components/header/AboutUs/OurPhilosophy';
import Leadership from './components/header/AboutUs/Leadership';
import Cooperation from './components/header/AboutUs/Cooperation';
import AccountInstructor from './components/header/Accounts/AccountInstructor';
import AccountStudent from './components/header/Accounts/AccountStudent';
import AccountAdmin from './components/header/Accounts/AccountAdmin';
import OnlineShop from './components/header/OnlineShop';
import ProfileContext from './context/ProfileContext';
import DashboardInstructor from './components/header/InstructorAccount/DashboardInstructor';
import ProfileInstructor from './components/header/InstructorAccount/ProfileInstructor';
import EditProfileInstructor from './components/header/InstructorAccount/EditProfileInstructor';
import ThemeContext from './context/ThemeContext';
import DashboardStudent from './components/header/StudentAccount/DashboardStudent';
import ProfileStudent from './components/header/StudentAccount/ProfileStudent';
import NotFoundPage from './components/static/NotFoundPage';

function App() {
  const [theme, setTheme] = useState('bg-light text-dark');
  const [profileData, setDataProfile] = useState({email: '', password: '', select: ''});

  return <div className={theme}>
    <ProfileContext.Provider value={{profileData, setDataProfile}}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='all-video' element={<AllVideo />} />
          <Route path='school-program' element={<SchoolProgram /> } />
          <Route path='school-subjects' element={<Subjects />} />
          <Route path='school-classes' element={<SchoolClasses />} />
          <Route path='additional-materials' element={<AdditionalMaterials />} />
          <Route path='school-subscription' element={<SchoolSubscription />} />
          <Route path='academy-program' element={<AcademyProgram />} />
          <Route path='online-school' element={<OnlineSchool />} />
          <Route path='online-course' element={<OnlineCourse />} />
          <Route path='online-education' element={<OnlineEducation />} />
          <Route path='online-academy' element={<OnlineAcademy />} />
          <Route path='online-university' element={<OnlineUniversity />} />
          <Route path='your-education' element={<YourEducation />} />
          <Route path='our-philosophy' element={<OurPhilosophy />} />
          <Route path='leadership' element={<Leadership />} />
          <Route path='cooperation' element={<Cooperation />} />
          <Route path='account-instructor' element={<AccountInstructor />} />
          <Route path='account-student' element={<AccountStudent />} />
          <Route path='account-admin' element={<AccountAdmin />} />
          <Route path='online-shop' element={<OnlineShop />} />
          <Route path='profile-instructor' element={<ProfileInstructor />}>
            <Route path='instructor-dashboard' element={<DashboardInstructor />} />
            <Route path='instructor-edit-profile' element={<EditProfileInstructor />} />
          </Route>
          <Route path='profile-student' element={<ProfileStudent />}>
            <Route path='student-dashboard' element={<DashboardStudent />} />
            <Route path='student-edit-profile' element={<EditProfileInstructor />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </ThemeContext.Provider>
    </ProfileContext.Provider>
  </div>
}

export default App;
