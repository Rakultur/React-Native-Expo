import {ScrollView,View,Text} from "react-native"
import {components} from "../registry/componentRegistry"

export default function ComponentGallery(){

 return(

  <ScrollView>

   <View style={{
    flexDirection:"row",
    flexWrap:"wrap",
    padding:20,
    gap:16
   }}>

   {components.map((item,i)=>{

    const Comp=item.component

    return(

     <View key={i} style={{
      width:"45%",
      padding:12,
      borderWidth:1,
      borderColor:"#ddd",
      borderRadius:10
     }}>

      <Text style={{marginBottom:10}}>
       {item.name}
      </Text>

      <Comp/>

     </View>

    )

   })}

   </View>

  </ScrollView>

 )
}
