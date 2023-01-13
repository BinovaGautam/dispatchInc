import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {useTheme} from '@/Hooks';

type Props = {
  height?: number | string;
  width?: number | string;
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
  secondary?: boolean;
};

const Brand = ({height, width, mode , secondary}: Props) => {
  const {Layout, Images} = useTheme();

  return (
    <View style={{height, width}}>
      <Image
        style={Layout.fullSize}
        source={secondary ? Images.altBrandName : Images.brandName}
        resizeMode={mode}
      />
    </View>
  );
};

Brand.defaultProps = {
  height: 150,
  width: 150,
  mode: 'contain',
};

export default Brand;
