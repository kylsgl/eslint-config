import { type Node } from 'estree';

export type NodeWithParent = Node & {
	readonly parent?: Nullish<NodeWithParent>;
};

export type Nullish<T> = T | null | undefined;
