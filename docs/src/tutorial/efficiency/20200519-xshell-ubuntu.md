---
isOriginal: true
category:
  - 效率工具
tag: 
    - Linux
    - 效率
    - Ubuntu
---

# XShell 连接 Ubuntu

## 前言

一般情况下，安装好的 Ubuntu 系统中默认是只安装了 `openssh-client`，此时只能通过此系统连接访问其他系统，但不具有让其他系统访问的权限。在终端查看 ssh 进程，输入 `ps -e|grep ssh`，如果有安装 `openssh-client` 只会出现 `ssh -agent`，不会出现 `sshd`。

![](assets/20200519-xshell-ubuntu/format,png-20240216201803294.png)

此时要想开放本机 SSH 服务以便其他系统登陆访问，就必须安装 `openssh-server`；

## openssh-server安装过程

1. 在终端中输入 `sudo apt-get install openssh-server`，然后输入自己的 `root` 密码就可以了；

    

    ![](assets/20200519-xshell-ubuntu/format,png-20240216201803332.png)

    

2. 然后启动 `ssh-server` 服务即可，开启方式，当然这两种开启方式都是需要切换到```root```用户或者提供密码权限的；

    ```shell
    service ssh start
    /etc/init.d/ssh start
    ```

    ![](assets/20200519-xshell-ubuntu/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTY1NTAyOQ==,size_16,color_FFFFFF,t_70-20240216201803296.png)


3. 验证是否开启成功；

    ![](assets/20200519-xshell-ubuntu/format,png-20240216201803310.png)

4. 若再次查看```ssh```进程时，同时出现```sshd```、```ssh -agent```进程，则说明```openssh -service```已经安装成功；

    ![](assets/20200519-xshell-ubuntu/format,png-20240216201803310.png)

    

5. 此时便可通过 XShell 访问 Ubuntu 了，依次填入主机 IP、用户名以及用户密码便可成功连接到 Ubuntu；

    ![image](assets/20200519-xshell-ubuntu/format,png-20240216201803297.png)

![image](assets/20200519-xshell-ubuntu/format,png-20240216201803300.png)

![image](assets/20200519-xshell-ubuntu/format,png-20240216201803278.png)

![image](assets/20200519-xshell-ubuntu/format,png-20240216201803309.png)

## 总结

经过上述一系列过程之后，就可以成功使用 `XShell` 连接到远程的 `Ubuntu` 服务器了。如果你有什么疑惑，欢迎留言交流，或者私信我！