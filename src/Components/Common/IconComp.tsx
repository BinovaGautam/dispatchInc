import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from './VectorIcons';
import {IconType} from '@/Components';
import {createIconSet} from 'react-native-vector-icons';
import glyphmap from '@/Assets/fonts/bootstrap-icons.json';

const BootstrapIcon = createIconSet(glyphmap, 'Bootstrap-icons');

type Props = {
  name: string;
  type?: IconType;
  size: number;
  color: string;
  style?: any;
  onPress?: () => void;
};

const IconComp = ({
  name,
  type = 'Ionicons',
  size,
  color,
  style,
  onPress,
}: Props) => {
  let getIconComp = (IconType: string) => {
    switch (IconType) {
      case 'Ionicons':
        return Ionicons;
      case 'MaterialIcons':
        return MaterialIcons;
      case 'MaterialCommunityIcons':
        return MaterialCommunityIcons;
      case 'FontAwesome':
        return FontAwesome;
      case 'Entypo':
        return Entypo;
      case 'EvilIcons':
        return EvilIcons;
      case 'Feather':
        return Feather;
      case 'Foundation':
        return Foundation;
      case 'Fontisto':
        return Fontisto;
      case 'Octicons':
        return Octicons;
      case 'SimpleLineIcons':
        return SimpleLineIcons;
      case 'Zocial':
        return SimpleLineIcons;
      case 'Bootstrap':
        return BootstrapIcon;
      default:
        return BootstrapIcon;
    }
  };

  let Icon = getIconComp(type);

  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconComp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
