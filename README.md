# 第35组武汉旅游网站建设


## 成员：王杉杉，秦子怡，万佳婧，何璐娟


## 网站地址：

## 任务分工：


王杉杉：负责整体框架搭建和旅游路线


秦子怡：文化板块

万佳婧：景点板块

何璐娟：美食板块

## 网站介绍：


这个网页是一个武汉旅游攻略页面，整体采用现代化设计，借助 Tailwind CSS 框架实现响应式布局，搭配 Font Awesome 图标库提升视觉效果，主要内容如下：

1. 页面头部与导航栏


顶部固定导航栏：包含网站 Logo（地图标记图标 +“武汉旅游攻略” 渐变文字）、桌面端导航链接（武汉介绍、热门景点、美食推荐等）及移动端折叠菜单，支持平滑过渡和 Hover 交互效果。


引入资源：通过 CDN 加载 Tailwind CSS、Font Awesome 字体图标及 Inter 字体，确保页面快速渲染。


2. 英雄区（首页焦点图）


轮播图组件：展示黄鹤楼、长江大桥、东湖等武汉地标图片，叠加半透明遮罩和渐变阴影，营造层次感。


核心文案：居中显示大标题 “探索江城武汉” 和介绍性文字，使用动态动画（如浮动效果）和响应式字体大小（clamp函数）适配不同设备。


视觉引导：底部箭头图标引导用户向下浏览。


3. 武汉介绍板块


双栏布局：左侧图片搭配装饰性边框，右侧文字介绍武汉的地理位置、历史文化及城市特色。


信息卡片：用网格布局展示 “历史悠久”“交通枢纽”“教育重镇”“美食之都” 四项亮点，卡片支持 Hover 阴影动画。


4. 热门景点推荐


网格布局：展示黄鹤楼、晴川阁、湖北省博物馆等 6 个景点，每个景点包含图片、简介（星级图标 + 分数）。


交互效果：图片支持 Hover 缩放，卡片底部叠加半透明遮罩和标签（如 “必打卡”“热门”）。


5. 美食推荐板块


用网格布局展示当地特色美食（如热干面、豆皮等），搭配餐厅推荐。


6. 技术与设计特点


响应式设计：通过 Tailwind CSS 的md:等断点类实现移动端适配，导航栏在小屏幕自动切换为折叠菜单。


自定义样式：在<style>标签中定义@layer utilities自定义类（如滚动条隐藏、文字阴影、浮动动画），提升页面个性化。


性能优化：使用 CDN 加速资源加载，图片采用相对路径（如images/文件夹），未滥用复杂特效以保持加载速度。


总结


页面以简洁明快的设计呈现武汉旅游核心信息，重点突出景点特色和视觉体验，适合作为旅游指南的基础框架，后续可进一步填充美食详情、行程规划等内容，并通过动态数据或交互功能增强实用性。

 ## 知识运用

一、HTML 基础结构与语义化

1. 文档声明与元标签

通过<meta charset="UTF-8">设置字符编码，<meta name="viewport" content="width=device-width, initial-scale=1.0">实现移动端适配。

2. 语义化标签

 头部导航：<header>包裹导航栏，<nav>定义导航区域，包含<a>链接和图标，结构清晰。
 
 内容分区：多个<section>标签划分不同板块（如武汉介绍、景点、美食等），每个板块通过id属性（如id="about"）实现锚点跳转。
 
 页脚：<footer>标签包含版权信息和联系方式，符合语义化规范。
 
4. 资源引入
 CSS 框架：通过<script src="https://cdn.tailwindcss.com"></script>加载 Tailwind CSS 核心文件。

 图标库：引入 Font Awesome 6.7.2 字体图标库（<linkhref="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">），用于导航栏、景点标签等图标（如fa-solid fa-map-marker-alt）。

 自定义字体：通过 Google Fonts 引入 Inter 字体（<link href="https://fonts.googleapis.com/css2?family=Inter">），并在 Tailwind 中配置为默认字体（font-inter类）。
 
二、Tailwind CSS 框架的核心应用
1. 响应式布局与断点

 通过md:、lg:等断点类实现不同屏幕尺寸的布局切换：

导航栏：桌面端（md:flex）显示水平菜单，移动端（md:hidden）隐藏并切换为折叠菜单。

网格布局：景点板块使用grid-cols-1 md:grid-cols-2 lg:grid-cols-3，在小屏单栏显示，中屏双栏，大屏三栏。

2. 容器与间距

页面内容通过.container mx-auto类实现水平居中，内边距通过px-4 md:px-8（小屏 4px，中屏 8px）适配不同屏幕

板块间距：py-20（上下内边距 20px）用于各<section>的垂直间距，gap-8控制网格卡片之间的间隙。

3. 颜色与主题配置
   
 自定义颜色：在 Tailwind 配置中扩展primary（#165DFF）、secondary（#FF7D00）等颜色，并应用于文字、边框和背景（如text-primary、bg-secondary/90）。

使用 CSS clamp 函数实现响应式字体大小，随屏幕宽度动态调整。

5. 组件交互与动画

导航链接使用border border-gray-200 rounded-lg hover:border-primary/50 hover:bg-primary/5，实现 Hover 时边框颜色变化和背景色半透明效果。

 卡片交互：景点卡片使用hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2，Hover 时阴影变大、轻微上移，过渡动画持续 300ms。
 
6. 自定义公用类（@layer utilities）
   
在<style type="text/tailwindcss">中定义以下自定义样式：

 文字阴影：.text-shadow和.text-shadow-lg，为标题和段落添加不同强度的阴影，提升立体感。

浮动动画：.animate-float通过@keyframes float实现元素上下浮动动画，应用于英雄区标题。

 滚动条隐藏：.scrollbar-hide通过::-webkit-scrollbar等属性隐藏浏览器滚动条，保持页面简洁。
 
三、CSS3 与视觉效果

1. 背景与遮罩
   
英雄区轮播图叠加bg-white/20（20% 透明度白色遮罩）和bg-gradient-to-t from-black/70 to-transparent（底部黑色渐变遮罩），增强文字可读性。

 导航栏使用bg-white/90 backdrop-blur-md实现半透明白色背景和毛玻璃模糊效果，适配滚动时的视觉变化。
 
3. 图片处理

图片使用object-cover属性确保在固定容器内完整显示，避免拉伸变形（如景点卡片图片h-64 object-cover）

四、JavaScript 交互逻辑

1. 导航栏滚动效果
   
通过 JS 监听窗口滚动事件，当滚动距离超过 100px 时，为导航栏添加bg-white shadow-md类（白色背景 + 阴影），提升悬浮感；滚动距离不足时移除类，恢复透明背景。

点击汉堡图标时，通过 JS 切换移动端菜单的hidden类，实现菜单展开 / 收起，并动态改变图标（fa-bars与fa-times切换）。

所有锚点链接（如href="#about"）通过 JS 实现平滑滚动，滚动时自动调整偏移量（offsetTop - 80），避免被固定导航栏遮挡。

总结

该网页综合运用HTML 语义化、Tailwind CSS 响应式布局与自定义主题、CSS3 动画与视觉效果、JavaScript 交互逻辑及字体图标资源整合等知识点，实现了美观且功能完整的旅游攻略展示。

 

 
