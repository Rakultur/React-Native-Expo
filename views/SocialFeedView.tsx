import {ScrollView} from "react-native"
import PostCard from "../components/social/PostCard"

export default function SocialFeedView(){

 return(

  <ScrollView style={{padding:20}}>

   <PostCard/>
   <PostCard/>
   <PostCard/>

  </ScrollView>

 )

}
