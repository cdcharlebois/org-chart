import { Component, createElement, useState } from "react";
import { Tree } from "react-organizational-chart";
import { Node } from "./Node";

export const OrgTree = props => {
    const { onDrag, onDrop, node, data, openNodes, toggleOpen } = props;
    const pageSize = 5;
    const [visiblePages, setVisiblePages] = useState(1);
    /**
     * checks to see if the give item is open
     * @param {ds item} item - the item to check
     * @returns {boolean} - true if the item is open; false if not;
     */
    const isNodeOpen = item => !!openNodes.find(n => n.id === item.id);

    const _renderTreeNodes = map => {
        const ret = [];
        if (map == null) return null;
        for (let i = 0; i < pageSize * visiblePages; i++) {
            const item = map[i];
            ret.push(
                <Node
                    onDrag={onDrag}
                    onDrop={onDrop}
                    node={node}
                    item={item}
                    isOpen={isNodeOpen}
                    toggleOpen={toggleOpen}
                    key={item.id}
                />
            );
        }
        return ret;
    }
    return <div>
        <Tree label={null}>{_renderTreeNodes(data)}</Tree>
        <button onClick={()=>{setVisiblePages(visiblePages+1)}}>More</button>
    </div>;
};
