---
isOriginal: true
category: 数据结构与算法
tag:
    - 算法
    - 二叉树
    - 数据结构
---



# 二叉树的遍历

> 作者：[村雨遥](https://github.com/cunyu1943)
> 
> 不要哀求，学会争取，若是如此，终有所获
>

## 🎈 号外

最近，公众号之外，建立了微信交流群，不定期会在群里分享各种资源（影视、IT 编程、考试提升……）&知识。如果有需要，可以**扫码或者后台添加小编微信备注入群**。进群后**优先看群公告**，**呼叫群中【资源分享小助手】**，还能免费帮找资源哦～

<center>
<img src="/contact/wxgroup.jpg" width="150"> 
</center>

## 前言

二叉树作为一种重要的数据结构，在算法中起到了承前启后的作用，它是数组和链表的延伸，也是图的基础。所以学习二叉树的相关知识是十分有必要的，而在相关的操作中，二叉树的遍历是最频繁的，今天就来看看二叉树的 4 种遍历方法！

## 二叉树数据结构

所谓二叉树，指的是每个结点最多有两个分支的树结构，其分支通常被称为“左子树”和“右子树”，而且他们的次序是固定的，不能随意颠倒，一棵二叉树的示例如下：

![](assets/202205170-binary-tree-traverse/37daa9b9896f27f71d9bccfae85dee6d.webp)

```java
class TreeNode{
    int val;
    // 左子树
    TreeNode left;
    // 右子树
    TreeNode right;
}
```

## 前序遍历

也叫做先序遍历，首先访问根节点，然后遍历左子树，最后再遍历右子树。而在遍历左右子树时，仍然按照先访问根节点，然后遍历左子树，最后遍历右子树的方式，直到二叉树为空则返回！

遍历的方式又主要分为递归和迭代的方式，其具体实现如下所示。

### 递归

```java
public ArrayList<Integer> preOrderReverse(TreeNode root){
    ArrayList<Integer> list = new ArrayList<>();

    preOrder(root, list);

    return list;
}


public void preOrder(TreeNode root, ArrayList<Integer> list){
    if(root != null){
        list.add(root.val);     
        preOrder(root.left, list);
        preOrder(root.right, list);
    }
}

```

### 迭代

```java
/**
* 用栈来进行迭代，由于栈是一种 先进后出 的数据结构，要输出的顺序是 中、左、右
* 所以我们优先将根节点加入 stack 后，然后先加入右子树，再加入左子树
*/
public ArrayList<Integer> preOrderReverse(TreeNode root){
    // 栈，先进后出
    Stack<TreeNode> stack = new Stack<>();
    ArrayList<Integer> list = new ArrayList<>();

    if(root != null){
        // 入栈
        stack.push(root);
        while(!stack.empty()){
            // 出栈
            TreeNode node = stack.pop();
            list.add(node.val);
            // 栈是一种先进后出的数据结构，所以先入右子树，再入左子树
            if(node.right != null){
                stack.push(node.right);
            }

            if(node.left != null){
                stack.push(node.left);
            }
        }
    }

    return list;
}
```



## 中序遍历

首先遍历左子树，然后访问根节点，最后再遍历右子树。而在遍历左右子树时，仍然按照先遍历左子树，然后访问根节点，最后遍历右子树的方式，直到二叉树为空则返回！

遍历的方式又主要分为递归和迭代的方式，其具体实现如下所示。

### 递归

```java
public ArrayList<Integer> inOrderReverse(TreeNode root){
    ArrayList<Integer> list = new ArrayList<>();

    inOrder(root, list);

    return list;
}


public void inOrder(TreeNode root, ArrayList<Integer> list){
    if(root != null){     
        inOrder(root.left, list);
        list.add(root.val);
        inOrder(root.right, list);
    }
}
```

### 迭代

```java
/**
* 中序遍历，按照 左、中、右 的顺序打印
* 所以优先将左子树压入栈中，接着处理中间节点，最后处理右子树
*
*/
public ArrayList<Integer> inOrderReverse(TreeNode root){
    ArrayList<Integer> list = new ArrayList<>();
    Stack<TreeNode> stack = new Stack<TreeNode>();

    TreeNode curr = root;
    while(curr != null || !stack.isEmpty()){
        // 节点不为空就一直压栈
        while(curr != null){
            stack.push(curr);
            // 考虑左子树
            curr = curr.left;	    
        }

        // 节点为空，出栈
        curr = stack.pop();
        // 加入当前值
        list.add(curr.val);
        // 考虑右子树
        curr = curr.right;
    }
    return list;
}
```



## 后序遍历

后序遍历首先遍历左子树，然后遍历右子树，最后访问根结点，在遍历左、右子树时，仍然先遍历左子树，然后遍历右子树，最后遍历根结点，直到二叉树为空则返回！

遍历的方式又主要分为递归和迭代的方式，其具体实现如下所示。

###  递归

```java
public ArrayList<Integer> postOrderReverse(TreeNode root){
    ArrayList<Integer> list = new ArrayList<>();

    postOrder(root, list);

    return list;
}


public void postOrder(TreeNode root, ArrayList<Integer> list){
    if(root != null){     
        postOrder(root.left, list);
        postOrder(root.right, list);
        list.add(root.val);
    }
}
```

###  迭代

```java
public ArrayList<Integer> postOrderReverse(TreeNode root){
    List<Integer> list = new ArrayList<Integer>();
    Stack<TreeNode> stack = new Stack<TreeNode>();
    TreeNode current = root;
    // 用来区分之前的结点是否被访问过
    TreeNode last = null;  
    while(current != null || !stack.isEmpty()){
        // 到树的最左面
        if(current != null){    
            stack.push(current);
            current = current.left;
        }else{
            //看最左结点有没有右子树
            current = stack.peek();    
            if(current.right != null && current.right != last){
                current = current.right;
                stack.push(current);
                //右子树再到最左
                current = current.left;     
            }else{
                //访问该结点，并标记被访问
                current = stack.pop();    
                list.add(current.val);
                last = current;
                current = null;
            }
        }
    }
    return list;
}
```

## 层次遍历

层次遍历也叫做广度优先遍历，它会优先访问离根节点最近的节点，其实现一般借助队列实现。

遍历的方式又主要分为递归和迭代的方式，其具体实现如下所示。

### 递归

```java
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> lists = new ArrayList<List<Integer>>();
    if(root != null){            
        // 根节点不为 null，递归
        dfs(1, root, lists);
    }
    return lists;
}


// index : 层数
public void dfs(int index, TreeNode root, List<List<Integer>> lists){

    // 若 lists 中序列数小于层数，则将 lists 中加入一个空的序列
    if(lists.size() < index){
        lists.add(new ArrayList<Integer>());
    }

    // 然后将当前节点加入 lists 的子序列中
    lists.get(index - 1).add(root.val);

    // 以上就处理完 root 节点
    // 接着处理左右子树即可，处理时，层数到下一次，所以要 +1

    if(root.left != null){
        dfs(index + 1, root.left, lists);
    }

    if(root.right != null){
        dfs(index + 1, root.right, lists);
    }
}
```

### 迭代

```java
ArrayList<ArrayList<Integer>> levelOrder(TreeNode root){
    List<List<Integer>> res = new ArrayList<>();
    Queue<TreeNode> queue = new ArrayDeque<>();

    if (root != null) {
        queue.add(root);
    }

    while (!queue.isEmpty()) {
        // 获取当前队列的长度，这个长度相当于当前这一层的节点个数
        int n = queue.size();
        // 将队列中的元素都拿出来(也就是获取这一层的节点)，放到临时list中
        // 如果节点的左/右子树不为空，也放入队列中
        List<Integer> level = new ArrayList<>();
        int i = 0;
        while(i < n){
            TreeNode node = queue.poll();
            level.add(node.val);
            if (node.left != null) {
                queue.add(node.left);
            }
            if (node.right != null) {
                queue.add(node.right);
            }
            i++;
        }

        // 将临时list加入最终返回结果中
        res.add(level);
    }

    return res;
}
```

## 总结

以上就是数据结构二叉树的 4 种遍历，如果你有更多关于各种遍历的实现，欢迎留言交流呀！