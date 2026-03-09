import {StyleSheet} from "react-native"

export const createStyles = (theme:any)=>
StyleSheet.create({

 container:{
  padding:12,
  borderRadius:8,
  borderWidth:1,
  borderColor:theme.border,
  backgroundColor:theme.card
 }

})
