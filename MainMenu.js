import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const images = [
  { uri: require("../Aa.jpg"), text: "Your story" },
  { uri: require("../Bb.jpg"), text: "Paul Mosh" },
  { uri: require("../Cc.jpg"), text: "Palesa Phori" },
  { uri: require("../Dd.jpg"), text: "Mpho Muso" },
  { uri: require("../Ee.jpg"), text: "Agnes Thaku" },
  { uri: require("../Ff.jpg"), text: "Dahcool" },
];

const StoryItem = ({ image }) => (
  <TouchableOpacity style={styles.storyItem}>
    <Image source={image.uri} style={styles.storyImage} />
    <Text style={styles.imageText}>{image.text}</Text>
  </TouchableOpacity>
);

const Post = ({ name, time, message, likes, postImage }) => {
  const [likeCount, setLikeCount] = useState(likes);

  const incrementLikes = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <TouchableOpacity style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={require("../Amo.jpg")} style={styles.profilePicture} />
        <View style={styles.detailsBox}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </View>
      <View style={styles.postBody}>
        <Text style={styles.postMessage}>{message}</Text>
        <Image source={postImage} style={styles.postImage} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={incrementLikes} style={styles.iconsRow}>
          <AntDesign name="like2" size={24} color="black" style={styles.icon} />
          <Text style={styles.iconText}>{likeCount} Likes</Text>
        </TouchableOpacity>
        <View style={styles.iconsRow}>
          <AntDesign name="message1" size={24} color="black" style={styles.icon} />
          <Text style={styles.iconText}>Comment</Text>
        </View>
        <View style={styles.iconsRow}>
          <AntDesign name="forward" size={24} color="black" style={styles.icon} />
          <Text style={styles.iconText}>Share</Text>
        </View>
      </View>
      <View style={styles.threeDots}>
        <AntDesign name="ellipsis1" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const FacebookNavBar = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === "Home" && styles.activeTab]}
        onPress={() => setActiveTab("Home")}
      >
        <AntDesign name="home" size={24} color={activeTab === "Home" ? "#1877f2" : "black"} />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === "Friends" && styles.activeTab]}
        onPress={() => setActiveTab("Friends")}
      >
        <AntDesign name="user" size={24} color={activeTab === "Friends" ? "#1877f2" : "black"} />
        <Text style={styles.tabText}>Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === "Messages" && styles.activeTab]}
        onPress={() => setActiveTab("Messages")}
      >
        <AntDesign name="message1" size={24} color={activeTab === "Messages" ? "#1877f2" : "black"} />
        <Text style={styles.tabText}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === "Notifications" && styles.activeTab]}
        onPress={() => setActiveTab("Notifications")}
      >
        <AntDesign name="bells" size={24} color={activeTab === "Notifications" ? "#1877f2" : "black"} />
        <Text style={styles.tabText}>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === "Market" && styles.activeTab]}
        onPress={() => setActiveTab("Market")}
      >
        <AntDesign name="shoppingcart" size={24} color={activeTab === "Market" ? "#1877f2" : "black"} />
        <Text style={styles.tabText}>Market</Text>
      </TouchableOpacity>
    </View>
  );
};

const MainMenu = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    const fetchData = async () => {
      
      await new Promise((resolve) => setTimeout(resolve, 500)); 
      const newPosts = [
        { name: "Amohelang Monaleli", time: "10 hrs", message: "In my happy error", likes: 62, postImage: require("../Amo.jpg") },
        { name: "Mpho Khafo", time: "12 hrs", message: "Feeling grateful today!", likes: 42, postImage: require("../Dd.jpg") },
        { name: "Moshe Maki", time: "15 hrs", message: "Enjoying the sunshine ☀️", likes: 30, postImage: require("../Ff.jpg") },
      ];
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FacebookNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16} 
      >
        <View style={{ flexDirection: "row" }}>
          {images.map((image, index) => (
            <StoryItem key={index} image={image} />
          ))}
        </View>
      </ScrollView>
      <ScrollView>
        {posts.map((post, index) => (
          <Post
            key={index}
            name={post.name}
            time={post.time}
            message={post.message}
            likes={post.likes}
            postImage={post.postImage}
          />
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  tab: {
    alignItems: "center",
    flex: 1,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#1877f2",
  },
  tabText: {
    fontSize: 12,
    marginTop: 2,
    color: "#65676b",
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
  },
  storyItem: {
    width: 100,
    height: 100,
    overflow: "hidden",
    marginRight: 10,
    position: 'relative',
  },
  storyImage: {
    width: "100%",
    height: "100%",
  },
  imageText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: 5,
    fontSize: 12,
    width: '100%',
    textAlign: 'center',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  detailsBox: {
    flexDirection: "column",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 12,
    color: "gray",
  },
  postBody: {
    marginBottom: 10,
  },
  postMessage: {
    fontSize: 16,
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#e4e6eb",
    paddingTop: 10,
  },
  iconsRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  iconText: {
    fontSize: 16,
    color: "#65676b",
  },
  threeDots: {
    alignSelf: "flex-end",
  },
});

export default MainMenu;
