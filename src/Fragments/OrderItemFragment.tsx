import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, MetricsSizes} from '@/Theme/Variables';
import {CText, Icon, VGap} from '@/Components';
import {useTheme} from '@/Hooks';
import moment from 'moment';

const {SMALL, LARGE, TINY, REGULAR} = MetricsSizes;

type Props = {
  data: any;
  status?: string;
  onPress ? : () => void;
};

const OrderItemFragment = ({data, onPress}: Props) => {
  const {Layout, Colors} = useTheme();
  let {
    street_address,
    secondary_address,
    city,
    state,
    zip,
    id,
    start_date,
    due_date,
    service,
    client_pay,
    date_created,
    status
  } = data?.item || {};

  const address = `${street_address || ''} \n${secondary_address || ''} ${
    city || ''
  } ${state || ''} ${zip || ''}`;

  const isRejected = String(status) === "3"
  const textColor = isRejected ? Colors.white : Colors.primary

  const _renderItem = (text: string, iconName: string, color?: string) => {
    const currColor =  color || textColor;
    return (
      <View style={[Layout.rowHCenter]}>
        <Icon
          type="Bootstrap"
          name={iconName}
          size={REGULAR}
          color={currColor}
        />
        <CText as="psm" color={currColor} > {text} </CText>
      </View>
    );
  };
  return (
    <Pressable onPress={onPress} style={[styles.container, isRejected && {backgroundColor: Colors.REJECTED_BG}]}>
      <CText as="pMed" color={textColor} style={[styles.text]}>
        {' '}
        {address}{' '}
      </CText>
      <VGap />
      <View style={[Layout.rowHCenter, Layout.justifyContentBetween]}>
        {_renderItem(id, 'hash')}
        {_renderItem(service, 'clipboard2')}
        {_renderItem(client_pay, 'currency-dollar')}
        {_renderItem(moment(date_created).format('MM/DD/YYYY'), 'calendar3')}
      </View>
      {isRejected && <CText as="psm" color={Colors.golden} style={styles.indicatorTxt}>Rejected</CText>}
    </Pressable>
  );
};

export default OrderItemFragment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: REGULAR,
    minHeight: LARGE * 3,
    marginTop: TINY * 1.5,
  },
  text: {
    lineHeight: SMALL * 2,
  },
    indicatorTxt: {
        position: 'absolute',
        right: REGULAR,
        top: REGULAR,

    }
});
