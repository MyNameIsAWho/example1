import React, { useState } from "react";
import { View, Button, Text, ImageBackground, StyleSheet } from "react-native";

const MyButtonComponent = () => {
  const titles = ["Night", "Day"];
  const texts = [
    "The day is in full swing, bustling with activity.The vibrant colors of nature are on full display, from the lush green of trees to the vivid blues of the sky.",
    "In the night The vibrant colors of nature are on full display, from the lush green of trees to the vivid blues of the sky.",
  ];

  const [daybutton, setNightButton] = useState(1);
  const [backgroundImage, setBackgroundImage] = useState(
    require("./3d68a5b7bfda285acf3bdce8294b6a28.jpg")
  );
  const [displayText, setDisplayText] = useState(texts[0]);

  const buttonPress = () => {
    setNightButton((prevIndex) => (prevIndex + 1) % titles.length);

    setBackgroundImage(
      daybutton === 0
        ? require("./3d68a5b7bfda285acf3bdce8294b6a28.jpg")
        : require("./ff971ceaa9e02bbba725f1a4dee42aa3.jpg")
    );

    setDisplayText(texts[daybutton]);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.text}>{displayText}</Text>
        <Button
          title={titles[daybutton]}
          onPress={buttonPress}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
    width: "80%",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});

export default MyButtonComponent;
