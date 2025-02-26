<template>
  <el-tree
    :data="treeData"
    :props="defaultProps"
    :lazy="true"
    :load="loadNode"
    node-key="id"
    @node-expand="handleNodeExpand"
    :highlight-current="true"
  ></el-tree>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'LazyLoadTree',
  setup() {
    const treeData = ref([]);
    const defaultProps = {
      children: 'children',
      label: 'label',
    };

    // 模拟懒加载，节点展开时动态加载数据
    const loadNode = (node, resolve) => {
      setTimeout(() => {
        const children = [];
        for (let i = 0; i < 10; i++) {
          children.push({
            id: `${node.id}-${i}`,
            label: `Node ${node.id}-${i}`,
            children: [],
          });
        }
        resolve(children); // 返回子节点数据
      }, 500);
    };

    // 节点展开时触发的事件处理
    const handleNodeExpand = (node) => {
      console.log('Node expanded:', node);
      // 可以在这里执行其他操作，如数据加载或增量更新等
    };

    return {
      treeData,
      defaultProps,
      loadNode,
      handleNodeExpand,
    };
  },
};
</script>
