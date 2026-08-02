---
isOriginal: true
category:
  - 效率工具
tag: 
    - Linux
    - 效率
    - Ubuntu
---



# VMware 安装 Ubuntu

> 作者：[村雨遥](https://github.com/cunyu1943)
> 
> 不要哀求，学会争取，若是如此，终有所获
> 
>



## 准备工作

### Ubuntu
- 获取地址：

	- [官网](https://ubuntu.com/download/desktop)

![](assets/20200518-vmware-ubuntu/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70-20240216201914941.png)


- [清华镜像站](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/21.04/)

![](assets/20200518-vmware-ubuntu/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70-20240216201914906.png)

### VMware
- [官网](https://my.vmware.com/cn/web/vmware/downloads/info/slug/desktop_end_user_computing/vmware_workstation_pro/16_0)

![](assets/20200518-vmware-ubuntu/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70-20240216201914920.png)




## 安装过程

Vmware 的安装过程此处不在赘述，不清楚如何安装的请自行百度，参见 [VMware14安装教程](https://blog.csdn.net/qq_40950957/article/details/80467513)，其他版本的安装也一样，只不过版本版本不同而已，但是步骤没啥变化。

然后就是 Vmware 中安装 Ubuntu 的过程如下：

1. 首先新建一个虚拟机，配置选典型即可，然后下一步；
![](assets/20200518-vmware-ubuntu/70.png)

2. 选择稍后安装操作系统，接着下一步；
![](assets/20200518-vmware-ubuntu/70-20240216201914978.png)
3. 然后操作客户机系统类型选 Linux，接着在下边的下拉框中选择你对应版本的系统；
![](assets/20200518-vmware-ubuntu/70-20240216201914975.png)

4. 为你的虚拟机命名，并且选择存放地址，接着下一步；
![](assets/20200518-vmware-ubuntu/70-20240216201914964.png)

5. 选择磁盘大小，建议选择 20 GB 以上；
![](assets/20200518-vmware-ubuntu/70-20240216201914992.png)
6. 接着自定义硬件，把不需要的硬件干掉；
![](assets/20200518-vmware-ubuntu/70-20240216201914981.png)
![](assets/20200518-vmware-ubuntu/70-20240216201914935.png)
7. 干掉不必要的硬件之后，直接选择完成；
![](assets/20200518-vmware-ubuntu/70-20240216201914973.png)
8. 编辑虚拟机的相关设置；
![](assets/20200518-vmware-ubuntu/70-20240216201915008.png)
9. 选择虚拟机内存，这个要根据自己的机器来选，不要搞太高，不然会跑不起来的，直接把你本机搞死；
![](assets/20200518-vmware-ubuntu/70-20240216201914995.png)
10. 接着就是选择你系统镜像文件的地址；
![](assets/20200518-vmware-ubuntu/70-20240216201915008-8085955.png)

11. 完成各个设置之后，点击开启此虚拟机；
![](assets/20200518-vmware-ubuntu/70-20240216201915016.png)
12. 选择中文（当然你也可以选择英语），然后点击安装；
![](assets/20200518-vmware-ubuntu/70-20240216201915022.png)

13. 接着选键盘布局，我们一般都是选汉语就 ok；
![](assets/20200518-vmware-ubuntu/70-20240216201915021.png)

14. 选择正常安装，对于是否更新和安装其他软件，为了安装的更快，选择不要下载更新；
![](assets/20200518-vmware-ubuntu/70-20240216201915030.png)

15. 选择清除整个磁盘并安装；

![](assets/20200518-vmware-ubuntu/70-20240216201915035.png)
16. 填写计算机名、用户名，并设置用户密码；
![](assets/20200518-vmware-ubuntu/70-20240216201915054.png)

17. 填写完上面的信息之后，等待一段时间安装，然后重启即可。重启后进入如下界面，只需要输入我们设置的用户密码尽快进入系统。
![](assets/20200518-vmware-ubuntu/70-20240216201915082.png)

## 总结

至此，Ubuntu 在 VMware 中的安装过程就结束了，接下来你就可以尽情的捣鼓安装好的系统了 😜.