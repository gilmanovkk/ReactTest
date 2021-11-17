import React from 'react';
// import 'rc-dialog/assets/index.css';
import 'rc-tree-select/assets/index.less';
import TreeSelect, {TreeNode, SHOW_PARENT} from 'rc-tree-select'

export const treeData = [
    {
        title: "title1",
        value: "value1",
        // value: {
        //     id: 1,
        //     name: "name1"
        // },
        children: []
    },
    {
        title: "title2",
        value: "value2",
        // value: {
        //     id: 2,
        //     name: "name2"
        // },
        children: []
    }
]

class DealTypeTree extends React.Component {
    state = {
        multipleValue: []
    }

    render() {
        const { multipleValue } = this.state;
        return (
            <div style={{display: 'block'}}>
                aaaaa
                <TreeSelect
                    // style={{ width: 300 }}
                    transitionName="rc-tree-select-dropdown-slide-up"
                    choiceTransitionName="rc-tree-select-selection__choice-zoom"
                    // dropdownStyle={{ maxHeight: 200, overflow: 'scroll' }}
                    placeholder={<i>placeholder</i>}
                    searchPlaceholder="please search"
                    multiple
                    value={multipleValue}
                    treeData={treeData}
                    treeNodeFilterProp="title"
                    // onChange={this.onMultipleChange}
                    // onSelect={this.onSelect}
                    allowClear
        />
            </div>
          );
    }
}

export default DealTypeTree;
