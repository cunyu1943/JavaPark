---
isOriginal: true
category: C 语言教程
tag:
    - C
date: 2018-03-08

---

# 内存管理函数

::: info 共勉
不要哀求，学会争取。若是如此，终有所获。
:::

## malloc函数


-  原型：`extern void* malloc(unsigned int size)`；
- 功能：动态分配内存；
- 注意：`size` 仅仅为申请内存字节大小，与申请内存块中存储的数据类型无关，故编程时需要通过以下方式给出：`长度 * sizeof(数据类型)`；


- 示例：


```c
//动态分配内存，输入5个数据，并把低于60的值打印出来

#include <stdio.h>
#include <stdlib.h>
int main()
{
    int *ptr = (int *)malloc(5 * sizeof(int));//分配内存

    for (int i = 0; i < 5; i++)
        {
            scanf_s("%d", &ptr[i]);//输入数据
        }

    int min = 60;
    
    for (int i = 0; i < 5; i++)
    {
        if (min > *(ptr + i))
            printf("%5d", *(ptr + i));//打印出低于60的值
    }
    free(ptr);
    system("pause");
    return 0;
}
```

## free函数

-  原型：`void free(void * ptr)`；
- 功能：搭配 `malloc()` 函数，释放 `malloc` 函数申请的动态内存；
- 注意：对于 `free(ptr)`，若 `ptr` 为 `NULL`，则可进行多次释放，若 `ptr` 是非空指针，则 `free` 对 `ptr` 只能进行一次操作，否则程序将崩溃；
- 示例：见 `malloc` 函数；
- 结果：见 `malloc` 函数；

## realloc函数

-  原型： `void* realloc(void * ptr,unsigned int size)`；
- 功能：先判断当前指针是否有足够的连续空间，若足够，扩大 `ptr` 指向的地址并返回，若不够，怎按`size` 指定的大小分配空间，将原数据 `copy` 到新分配的内存中，然后释放原 `ptr` 所指向区域；
- 注意：内存使用完毕后，应使用 `free()` 函数释放，但原来的指针是自动释放，不需要使用free；


- 示例：


```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
   char *str;

	/* 一开始的内存分配 */
	str = (char *)malloc(15);
	strcpy(str, "Hello World!");
	printf("String = %s\n", str);

	/* 重新分配内存 */
	str = (char *)realloc(str, 25);
	strcat(str, ", C");
	printf("String = %s\n", str);

	free(str);
	system("pause");
	return 0;
}
```

## calloc函数

-  原型：`void* calloc（unsigned int num，unsigned int size）`；
- 功能：为已经分配的内存重新分配空间并复制内容；
- 注意：`num`：对象个数，`size`：对象占据的内存字节数，相较于 `malloc` 函数，`calloc` 函数会自动将内存初始化为 0；


- 示例：


```c
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num;
	int i;
	int *ptr;

	printf("元素个数为：");
	scanf("%d", &num);

	ptr = (int*)calloc(num, sizeof(int));
	printf("输入 %d 个数字：\n", num);
	for (i = 0; i < num; i++)
	{
		scanf("%d", &ptr[i]);
	}

	printf("输入的数字为：");
	for (i = 0; i < num; i++) {
		printf("%d ", ptr[i]);
	}
	printf("\n");
	system("pause");
	return 0;
}
```



## ⏳ 联系

想解锁更多知识？不妨关注我的微信公众号：**村雨遥（id：JavaPark）**。

扫一扫，探索另一个全新的世界。

![](/contact/wechatpublic.svg =150x)

<Share colorful />

