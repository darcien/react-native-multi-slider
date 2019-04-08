declare module 'react-native-multi-slider' {
  import {Component, ComponentType} from 'react';
  import {StyleProp, ViewStyle} from 'react-native';

  type Values = [number] | [number, number];

  interface TouchDimensions {
    height?: number;
    width?: number;
    borderRadius?: number;
    slipDisplacement?: number;
  }

  interface MultiSliderProps {
    values?: Values;

    onValuesChangeStart?: () => void;
    onValuesChange?: (values: Values) => void;
    onValuesChangeFinish?: (values: Values) => void;

    sliderLength?: number;
    touchDimensions?: TouchDimensions;

    customMarker?: ComponentType;

    customMarkerLeft?: ComponentType;
    customMarkerRight?: ComponentType;
    isMarkersSeparated?: boolean;

    min?: number;
    max?: number;
    step?: number;

    optionsArray?: Array<number>;

    containerStyle?: StyleProp<ViewStyle>;
    trackStyle?: StyleProp<ViewStyle>;
    selectedStyle?: StyleProp<ViewStyle>;
    unselectedStyle?: StyleProp<ViewStyle>;
    markerContainerStyle?: StyleProp<ViewStyle>;
    markerStyle?: StyleProp<ViewStyle>;
    pressedMarkerStyle?: StyleProp<ViewStyle>;
    valuePrefix?: string;
    valueSuffix?: string;
    enabledOne?: boolean;
    enabledTwo?: boolean;
    onToggleOne?: () => void;
    onToggleTwo?: () => void;
    allowOverlap?: boolean;
    snapped?: boolean;
    markerOffsetX?: number;
    markerOffsetY?: number;
  }

  export default class MultiSlider extends Component<MultiSliderProps> {}
}
