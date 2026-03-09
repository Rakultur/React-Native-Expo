import React from "react"
import { Text, View } from "react-native"
import { useTheme } from "../../../themes/ThemeProvider"
import { createStyles } from "./styles"

export default function Menu(){

 const {theme} = useTheme()
 const styles = createStyles(theme)

 return(
  <View style={styles.container}>
   <Text>Menu component</Text>
  </View>
 )

}
