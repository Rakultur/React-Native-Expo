import {ScrollView} from "react-native"
import StatCard from "../components/dashboard/StatCard"
import ChartCard from "../components/dashboard/ChartCard"

export default function DashboardView(){

 return(

  <ScrollView style={{padding:20}}>

   <StatCard/>
   <ChartCard/>

  </ScrollView>

 )

}
