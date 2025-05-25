
# 第35组武汉旅游网站建设

## 成员：王杉杉，秦子怡，万佳婧，何璐娟

## 网站地址：[https://wss0910.github.io/website-construction/](https://wss0910.github.io/website-construction/)

## 任务分工：
- 王杉杉：负责整体框架搭建和旅游路线  
- 秦子怡：文化板块  
- 万佳婧：景点板块  
- 何璐娟：美食板块  


## 网站名称： 江城游 
这个网页是一个武汉旅游攻略页面，整体采用现代化设计，借助 Tailwind CSS 框架实现响应式布局，搭配 Font Awesome 图标库提升视觉效果，主要内容如下：  

### 1. 页面头部与导航栏  
- **顶部固定导航栏**：包含网站 Logo（地图标记图标 +“武汉旅游攻略” 渐变文字）、桌面端导航链接（武汉介绍、热门景点、美食推荐等）及移动端折叠菜单，支持平滑过渡和 Hover 交互效果。  
- **引入资源**：通过 CDN 加载 Tailwind CSS、Font Awesome 字体图标及 Inter 字体，确保页面快速渲染。  

### 2. 英雄区（首页焦点图）  
- **轮播图组件**：展示黄鹤楼、长江大桥、东湖等武汉地标图片，叠加半透明遮罩和渐变阴影，营造层次感。  
- **核心文案**：居中显示大标题 “探索江城武汉” 和介绍性文字，使用动态动画（如浮动效果）和响应式字体大小（`clamp`函数）适配不同设备。  
- **视觉引导**：底部箭头图标引导用户向下浏览。  

### 3. 武汉介绍板块  
- **双栏布局**：左侧图片搭配装饰性边框，右侧文字介绍武汉的地理位置、历史文化及城市特色。  
- **信息卡片**：用网格布局展示 “历史悠久”“交通枢纽”“教育重镇”“美食之都” 四项亮点，卡片支持 Hover 阴影动画。  

### 4. 热门景点推荐  
- **网格布局**：展示黄鹤楼、晴川阁、湖北省博物馆等 6 个景点，每个景点包含图片、简介（星级图标 + 分数）。  
- **交互效果**：图片支持 Hover 缩放，卡片底部叠加半透明遮罩和标签（如 “必打卡”“热门”）。  

### 5. 美食推荐板块  
用网格布局展示当地特色美食（如热干面、豆皮等），搭配餐厅推荐。  

### 6. 技术与设计特点  
- **响应式设计**：通过 Tailwind CSS 的 `md:` 等断点类实现移动端适配，导航栏在小屏幕自动切换为折叠菜单。  
- **自定义样式**：在 `<style>` 标签中定义 `@layer utilities` 自定义类（如滚动条隐藏、文字阴影、浮动动画），提升页面个性化。  
- **性能优化**：使用 CDN 加速资源加载，图片采用相对路径（如 `images/` 文件夹），未滥用复杂特效以保持加载速度。  

**总结**：页面以简洁明快的设计呈现武汉旅游核心信息，重点突出景点特色和视觉体验，适合作为旅游指南的基础框架，后续可进一步填充美食详情、行程规划等内容，并通过动态数据或交互功能增强实用性。  


## 知识运用  
### 一、HTML 基础结构与语义化  
#### 1. 文档声明与元标签  
```html  
<meta charset="UTF-8">  
<meta name="viewport" content="width=device-width, initial-scale=1.0">  
```  

#### 2. 语义化标签  
- **头部导航**：  
  ```html  
  <header>  
    <nav>  
      <a href="#"></a> <!-- 导航链接与图标 -->  
    </nav>  
  </header>  
  ```  
- **内容分区**：  
  多个 `<section>` 标签划分不同板块（如武汉介绍、景点、美食等），每个板块通过 `id` 属性（如 `id="about"`）实现锚点跳转。  
- **页脚**：  
  ```html  
  <footer> <!-- 版权信息和联系方式 --> </footer>  
  ```  

#### 3. 资源引入  
- **CSS 框架**：  
  ```html  
  <script src="https://cdn.tailwindcss.com"></script>  
  ```  
- **图标库**：  
  ```html  
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">  
  ```  
- **自定义字体**：  
  ```html  
  <link href="https://fonts.googleapis.com/css2?family=Inter">  
  ```  
  在 Tailwind 中配置为默认字体（`font-inter` 类）。  


### 二、Tailwind CSS 框架的核心应用  
#### 1. 响应式布局与断点  
- **导航栏**：桌面端（`md:flex`）显示水平菜单，移动端（`md:hidden`）隐藏并切换为折叠菜单。  
- **网格布局**：景点板块使用 `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`，在小屏单栏显示，中屏双栏，大屏三栏。  

#### 2. 容器与间距  
- 页面内容通过 `.container mx-auto` 类实现水平居中，内边距通过 `px-4 md:px-8`（小屏 4px，中屏 8px）适配不同屏幕。  
- 板块间距：`py-20`（上下内边距 20px）用于各 `<section>` 的垂直间距，`gap-8` 控制网格卡片之间的间隙。  

#### 3. 颜色与主题配置  
- 自定义颜色：在 Tailwind 配置中扩展 `primary（#165DFF）`、`secondary（#FF7D00）` 等颜色，并应用于文字、边框和背景（如 `text-primary`、`bg-secondary/90`）。  
- 使用 CSS `clamp` 函数实现响应式字体大小，随屏幕宽度动态调整。  

#### 4. 组件交互与动画  
- 导航链接使用 `border border-gray-200 rounded-lg hover:border-primary/50 hover:bg-primary/50`，实现 Hover 时边框颜色变化和背景色半透明效果。  
- 卡片交互：景点卡片使用 `hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`，Hover 时阴影变大、轻微上移，过渡动画持续 300ms。  

#### 5. 自定义公用类（`@layer utilities`）  
在 `<style type="text/tailwindcss">` 中定义以下自定义样式：  
```css  
@layer utilities {  
  .text-shadow { text-shadow: 0 2px 4px rgba(0,0,0,0.1); }  
  .text-shadow-lg { text-shadow: 0 4px 12px rgba(0,0,0,0.2); }  
  .animate-float { animation: float 2s ease-in-out infinite; }  
  @keyframes float { /* 浮动动画定义 */ }  
  .scrollbar-hide { /* 隐藏滚动条样式 */ }  
}  
```  


### 三、CSS3 与视觉效果  
#### 1. 背景与遮罩  
- 英雄区轮播图叠加 `bg-white/20`（20% 透明度白色遮罩）和 `bg-gradient-to-t from-black/70 to-transparent`（底部黑色渐变遮罩），增强文字可读性。  
- 导航栏使用 `bg-white/90 backdrop-blur-md` 实现半透明白色背景和毛玻璃模糊效果，适配滚动时的视觉变化。  

#### 2. 图片处理  
图片使用 `object-cover` 属性确保在固定容器内完整显示，避免拉伸变形（如景点卡片图片 `h-64 object-cover`）。  


### 四、JavaScript 交互逻辑  
#### 1. 导航栏滚动效果  
通过 JS 监听窗口滚动事件，动态切换导航栏类名：  
```javascript  
window.addEventListener('scroll', () => {  
  const nav = document.querySelector('nav');  
  if (window.scrollY > 100) {  
    nav.classList.add('bg-white', 'shadow-md');  
  } else {  
    nav.classList.remove('bg-white', 'shadow-md');  
  }  
});  
```  

#### 2. 移动端菜单切换  
点击汉堡图标时，通过 JS 切换 `hidden` 类和图标：  
```javascript  
const menuBtn = document.querySelector('.menu-btn');  
const mobileMenu = document.querySelector('.mobile-menu');  
menuBtn.addEventListener('click', () => {  
  mobileMenu.classList.toggle('hidden');  
  menuBtn.classList.toggle('fa-bars', 'fa-times');  
});  
```  

#### 3. 平滑锚点滚动  
所有锚点链接通过 JS 实现平滑滚动并调整偏移量：  
```javascript  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {  
  anchor.addEventListener('click', function (e) {  
    e.preventDefault();  
    const target = document.querySelector(this.getAttribute('href'));  
    window.scrollTo({  
      top: target.offsetTop - 80,  
      behavior: 'smooth'  
    });  
  });  
});  
```  


**总结**：该网页综合运用 HTML 语义化、Tailwind CSS 响应式布局与自定义主题、CSS3 动画与视觉效果、JavaScript 交互逻辑及字体图标资源整合等知识点，实现了美观且功能完整的旅游攻略展示。
