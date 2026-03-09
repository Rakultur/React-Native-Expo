import React from "react"
import { Text, View } from "react-native"
import { useTheme } from "../../../themes/ThemeProvider"
import { createStyles } from "./styles"

export default function Skeleton(){

 const {theme} = useTheme()
 const styles = createStyles(theme)

 return(
  <View style={styles.container}>
   <Text>Skeleton component</Text>
  </View>
 )

}
