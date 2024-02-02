import { ScrollView, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import EpisodesItem from "./EpisodesItem";
import { useCallback, useEffect, useState } from "react";
import { RefreshControl } from "react-native";
import axiosInstance from "../axiosInstance";

const EpisodesList = ({route}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [episodes, setEpisodes] = useState([])

  const onRefresh = async() => {
    setRefreshing(true);
    const response = await  axiosInstance.get('api/episode' )
    setEpisodes(response.data.results)
    setRefreshing(false);
  }

  useEffect(()=>{
    if(route.params.x === 10){
      onRefresh();
    }
  },[route.params.x])


  console.log(route.params.x)


  return (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
      >

        {
            episodes.map((item)=>{
                return (
                    <EpisodesItem title={item.name} episode={item.episode} airDate={item.air_date}></EpisodesItem>
                )
            })
        }
       

      </ScrollView>
    </SafeAreaView>
  );
};

export default EpisodesList;
