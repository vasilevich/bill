declare module 'bill' {
    import {ReactElement, ReactInstance, ReactNode} from 'react';

    export interface INode {
        nodeType: number
        element: ReactElement<any>
        instance: ReactInstance | HTMLElement
        privateInstance: ReactInstance
        nextSibling: INode
        prevSibling: INode
        children: Array<INode>
        findAll: (test: (node: INode | ReactNode) => boolean, includeSelf?: boolean) => Array<INode>
    }

    export interface ISelector {
        (strings: Array<String> | string, ...values: Array<any>): { selector: string, valueMap: object }
    }

    export function querySelectorAll(selector: string, subject: Element | ReactInstance | INode | ReactNode): Array<INode>

    export function matches(selector: string, subject: Element | ReactInstance | INode | ReactNode): boolean

    export function selector(): ISelector

    export function findAll(subject: Element | ReactInstance | INode | ReactNode): Array<INode>

    export function compile(selector: string): (node: INode | ReactNode) => boolean

    export function registerPseudo(pseudoSelector: string, handlePseudo: (selector: string) => ((node: INode | ReactNode) => boolean)): void

    export function registerNesting(nestingCombinator: string, handleNesting: (matcher: Function) => ((node: INode | ReactNode) => boolean)): void

    export interface INODE_TYPES {
        COMPOSITE: number
        DOM: number
        TEXT: number
    }

    export const NODE_TYPES: INODE_TYPES;


    export function isNode(possibleNode: any): boolean

}
