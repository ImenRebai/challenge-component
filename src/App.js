
import './App.css';
import First from './Components/First';
import Post from './Components/Post';
import SideMenu from './Components/SideMenu';

function App() {
  return (
<div className="App">
       <First />

<div style={{display: "flex" , justifyContent: "center", alignItems: "center"}}>
     {/* Post & SideMenu Container */}
    <div style={{display: "flex"}}>

      {/* Post Container */}
          <div style={{width: "60%"}}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          </div>
      {/*== Post Container ==*/}
       
     {/* SideMenu container */}
        
       <div style={{width: "40%"}}>
          <SideMenu />
          </div>
      {/*==  SideMenu container  ==*/}
      
    </div>
     
      {/*==  Post & SideMenu Container  ==*/}

</div>
</div>
  );
}

export default App;
