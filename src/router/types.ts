import { ElementType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type RouterPath = string | string[] | undefined;

export interface ExtendedRouterProps {
  path: string;
  component: ElementType;
  redirectUrl?: string;
  guards?: Guard[];
  resolvers?: PropsResolvers;
  childs?: ExtendedRouterProps[];
  redirectToChild?: string;
  exact?: boolean;
  pageTitle?: string;
  location?: Location;
  children?: any;
  setResolverInfo?: any;
  setGuardStatus?: any;
  status?: ExtendedRouterStatus;
}

export enum ExtendedRouterStatus {
  INITIAL = 1,
  SUCCESS,
  FAIL,
}

export interface PropsResolvers {
  [index: string]: Resolver;
}

export interface Guard {
  canActivate(): Promise<boolean> | boolean;

  redirectUrl?: string;
}

export interface Resolver {
  resolve(): Promise<any> | any;
}

export type Props = RouteComponentProps & ExtendedRouterProps;

export interface ParentComponentWithChildRoutes {
  childRoutes: JSX.Element[];
}
