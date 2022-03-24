import * as React from "react";
import React, { useState } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";

function LogarScreen({ navigation })

const Drawer = createDrawerNavigator();
function Component(props) {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        {props.route.name}
      </Text>
    </Center>
  );
}

const getIcon = (screenName) => {
  switch (screenName) {
    case "Livros":
      return "book";
    case "Empréstimos":
      return "hand";
    case "Favoritos":
      return "heart";
    case "Histórico":
      return "history";
    case "Entrar":
      return "login";
    case "Sair":
      return "logout";
    default:
      return undefined;
  }
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea >
      <VStack space="6" my="2" mx="1" >
        <Box px="4">
          <Text bold color="gray.700">
            Usuário
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            john_doe@gmail.com
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={
                      index === props.state.index ? "primary.500" : "gray.500"
                    }
                    size="5"
                    as={<MaterialCommunityIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? "primary.500" : "gray.700"
                    }
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>

        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Livros" component={Component} />
        <Drawer.Screen name="Empréstimos" component={Component} />
        <Drawer.Screen name="Favoritos" component={Component} />
        <Drawer.Screen name="Histórico" component={Component} />
        <Drawer.Screen name="Entrar" component={Component} />
      </Drawer.Navigator>
    </Box>
  );
}
export default function Example() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <MyDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
