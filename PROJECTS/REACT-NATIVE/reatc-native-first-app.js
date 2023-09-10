import React ,{useState} from 'react';
import { Text, View, StyleSheet, Image,TextInput ,Linking ,TouchableOpacity} from 'react-native';
import Aishwarya from './aishwarya.jpeg';
import Alia from './alia.jpeg';
import Amir from './amir.jpeg';
import Annaya from './anaya.jpeg';
import Danush from './danush.jpeg';
import Disha from './disha.jpeg';
import Hruthik from './hruthik.jpeg';
import Jacueline from './jacueline.jpeg';
import Kajal from './kajal.jpeg';
import Kangana from './kangan.jpeg';
import Kriti from './kriti.jpeg';
import Nayanthara from './nayanathara.jpeg';
import Pooja from './pooja.jpeg';
import Prabhas from './prabhas.jpeg';
import Priyanka from './priyanka.jpeg';
import Charan  from './charan.jpeg';
import Ranbeer from './ranbeer.jpeg';
import Rashmika from './rashmika.jpeg';
import Saif from './saif.jpeg';
import Salman from './salman.jpeg';
import Samantha from './samantha.jpeg';
import Shahrukan from './shahrukhan.jpeg';
import Shalini from './shalini.jpg';
import Shradha from './shardha.jpeg';
import Shruthi from './shruthi.jpeg';
import Sridevi from './sridevi.jpeg';
import Sushanth from './sushanth.jpeg';
import Tammanh from './tammanh.jpeg';
import Tiger from './tiger.jpeg';
import Vijay from './vijay.jpeg';
import Vishal from './vishal.jpeg';
import Yash from './yash.jpeg';



const App=()=>{
  const [search,setSearch]=useState('');
const images =[
  {id:1,
  name:'aishwarya',
  src:Aishwarya
 },
 {id:2,
  name:'alia',
  src:Alia
 },
 {id:3,
  name:'amir',
  src:Amir
 },
 {id:4,
  name:'anaya',
  src:Annaya
 },
 {id:5,
  name:'charan',
  src:Charan
 },
 {id:6,
  name:'danush',
  src:Danush
 },
 {id:7,
  name:'disha',
  src:Disha
 },
 {id :8,
  name:'hruthik',
  src:Hruthik
 }, {id:9,
  name:'jacueline',
  src:Jacueline
 }, {id:10,
  name:'kajal',
  src:Kajal
 }, {id:11,
  name:'kangana',
  src:Kangana
 }, {id:12,
  name:'kriti',
  src:Kriti
 }, {id:13,
  name:'nayanthara',
  src:Nayanthara
 }, {id:14,
  name:'pooja',
  src:Pooja
 }, {id:15,
  name:'prabhas',
  src:Prabhas
 }, {id:16,
  name:'priyanka',
  src:Priyanka
 }, {id:17,
  name:'ranbeer',
  src:Ranbeer
 }, {id:18,
  name:'rashmika',
  src:Rashmika
 }, {id:19,
  name:'saif',
  src:Saif
 }, {id:20,
  name:'salman',
  src:Salman
 }, {id:21,
  name:'samantha',
  src:Samantha
 }, {id:22,
  name:'shahrukhan',
  src:Shahrukan
 }, {id:23,
  name:'shalini',
  src:Shalini
 }, {id:24,
  name:'shradha',
  src:Shradha
 }, {id:25,
  name:'shruthi',
  src:Shruthi
 }, {id:26,
  name:'sridevi',
  src:Sridevi
 }, {id:27,
  name:'sushanth',
  src:Sushanth
 }, {id:28,
  name:'tammanh',
  src:Tammanh
 },
 {id:29,
  name:'tiger',
  src:Tiger
 },{id:30,
  name:'vijay',
  src:Vijay
 },
 {id:31,
  name:'vishal',
  src:Vishal
 },{id:32,
  name:'yash',
  src:Yash
 },
]
  

   const filteredImages = images.filter(image => image.name.toLowerCase().includes(search.toLowerCase()));
     const handleDownload = (url) => {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <View>
    <Text 
    style=
    {styles.heading}>Actors And Actress Gallery</Text>
      <TextInput 
        value={search}
        onChangeText={text => setSearch(text)}
        style={styles.input}
        placeholder="Search for an actor"
      />
      <View style={styles.imageContainer}>
        {filteredImages.map(image =>(
          <View key={image.id} style={styles.imageWrapper}>
            <Image source={image.src} style={styles.image} />
            <Text style={styles.imageText}>{image.name.charAt(0).toUpperCase() + image.name.slice(1).toLowerCase()}</Text>
                 <TouchableOpacity 
              style={styles.downloadButton} 
              onPress={() => handleDownload(images.src)}
            >
              <Text>Download</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 heading:{
      fontSize:25,
      background:'lightBlue',
      borderRadius:8,
      marginVertical:30,
      marginHorizontical:30,
      padding:20,
      },
  input: {
    height: 40,
    margin: 20,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    boxShadow: '20px ,20px 10px 10px gray' ,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    margin: 10,
    padding: 10
  },
  imageWrapper: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius:10,
  },
   downloadButton: {
    padding: 10,
    backgroundColor: '#8fb5db',
    marginTop: 10,
  },
  imageText: {
    marginTop: 10,
    fontSize: 18,
  },
});

export default App

