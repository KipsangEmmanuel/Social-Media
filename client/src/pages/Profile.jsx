import Top from '../components/profile/Top';
import CenterBody from '../layout/CenterBody';
import './Profile.scss';


const Profile=()=>{
    return (
      <>
       <div className="profile-right-content">
         <div className="profile-content">
         <div className="profile-top">
          <Top/>
        </div>
        <div className="profile-bottom">
        <CenterBody/>
        </div>
      </div>
      

             
 </div>
 
 </>

    )
};

export default Profile;

