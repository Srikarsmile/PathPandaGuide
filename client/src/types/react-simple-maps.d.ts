declare module 'react-simple-maps' {
  import * as React from 'react';

  export interface ComposableMapProps {
    projectionConfig?: {
      scale?: number;
      rotation?: [number, number, number];
      [key: string]: any;
    };
    width?: number;
    height?: number;
    projection?: string | Function;
    className?: string;
    [key: string]: any;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: Array<any> }) => React.ReactNode;
    parseGeographies?: (features: Array<any>) => Array<any>;
    [key: string]: any;
  }

  export interface GeographyProps {
    geography: any;
    style?: {
      default?: React.CSSProperties;
      hover?: React.CSSProperties;
      pressed?: React.CSSProperties;
    };
    [key: string]: any;
  }

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    className?: string;
    onMoveStart?: (position: any) => void;
    onMoveEnd?: (position: any) => void;
    [key: string]: any;
  }

  export interface MarkerProps {
    coordinates: [number, number];
    className?: string;
    [key: string]: any;
  }

  export interface AnnotationProps {
    subject: [number, number];
    dx?: number;
    dy?: number;
    curve?: number;
    connectorProps?: React.SVGProps<SVGPathElement>;
    [key: string]: any;
  }

  export interface GraticuleProps {
    step?: [number, number];
    className?: string;
    [key: string]: any;
  }

  export interface SphereProps {
    className?: string;
    [key: string]: any;
  }

  export const ComposableMap: React.FC<ComposableMapProps>;
  export const Geographies: React.FC<GeographiesProps>;
  export const Geography: React.FC<GeographyProps>;
  export const ZoomableGroup: React.FC<ZoomableGroupProps>;
  export const Marker: React.FC<MarkerProps>;
  export const Annotation: React.FC<AnnotationProps>;
  export const Graticule: React.FC<GraticuleProps>;
  export const Sphere: React.FC<SphereProps>;
  export const Line: React.FC<any>;
}