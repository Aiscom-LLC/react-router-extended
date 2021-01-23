import { ExtentedRouterStatus, Guard, PropsResolvers } from './types';
interface UserManager {
    resolvers: PropsResolvers;
    guards: Guard[];
    pathname: string;
    redirectUrl?: string;
}
export declare function useManager({ resolvers, guards, pathname, redirectUrl }: UserManager): {
    loadResolvers: () => Promise<{}>;
    checkGuards: (pathname: string) => Promise<ExtentedRouterStatus>;
    getRedirectUrl: () => string;
};
export {};
