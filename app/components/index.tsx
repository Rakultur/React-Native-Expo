import React from "react"
import { ScrollView,View } from "react-native"

import Button from "../../components/ui/Button"
import Card from "../../components/ui/Card"
import Avatar from "../../components/ui/Avatar"

export default function Components(){

return(

<ScrollView>

<View style={{flexDirection:"row",flexWrap:"wrap"}}>

<Button/>
<Card/>
<Avatar/>

</View>

</ScrollView>

)

}
