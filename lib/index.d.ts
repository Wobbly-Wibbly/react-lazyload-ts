/**
 * react-lazyload
 */
import React, { Component, CSSProperties, ReactNode } from 'react';
declare const lazyLoadHandler: () => void;
/**
 * Forces the component to display regardless of whether the element is visible in the viewport.
 */
declare const forceVisible: () => void;
declare class LazyLoad extends Component {
    constructor(props: any);
    componentDidMount(): void;
    shouldComponentUpdate(): any;
    componentWillUnmount(): void;
    setRef(element: any): void;
    render(): JSX.Element;
}
declare const decorator: (options?: {}) => (WrappedComponent: any) => {
    new (): {
        render(): JSX.Element;
        context: unknown;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{}>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export interface LazyLoadProps {
    once?: boolean | undefined;
    height?: number | string | undefined;
    offset?: number | number[] | undefined;
    overflow?: boolean | undefined;
    resize?: boolean | undefined;
    scroll?: boolean | undefined;
    children?: ReactNode | undefined;
    throttle?: number | boolean | undefined;
    debounce?: number | boolean | undefined;
    placeholder?: ReactNode | undefined;
    scrollContainer?: string | Element | undefined;
    unmountIfInvisible?: boolean | undefined;
    preventLoading?: boolean | undefined;
    className?: string | undefined;
    classNamePrefix?: string | undefined;
    style?: CSSProperties | undefined;
}
export { decorator as lazyload };
export default LazyLoad;
export { lazyLoadHandler as forceCheck };
export { forceVisible };
