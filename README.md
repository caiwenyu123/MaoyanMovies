![image](MoviesHTML/image.jpg)

##  创建项目

    cmd/控制台/终端地址进入该文件夹
    
    然后执行npm init
   
    创建项目所需要的package.json配置文件

    cnpm install 插件名称 --save-dev
    
    --save-dev是把插件写入配置文件中
    
###  webpack

    创建webpack的配置文件webpack.config.js
    
    因为这里需要使用webpack，所以需要在package.json中加入webpack和webpack-cli
    
###  需要使用less文件

    下载解析less和css所需要的所有插件
	    
### 热监控修改的文件，并且自动打包

    利用webpack-dev-server插件，监听端口
	
	当你的文件夹里面的内容发生改变的时候，会自动更新，并且压缩打包
    
    执行:webpack --watch
    
##  浏览

    Movies和MoviesHTML文件目录中运行npm install 或cnpm install 
	
	安装package.json中的所有插件
	
	Movies中执行 node index.js 开启服务
	
	MoviesHTML文件目录中打开index.html
	
	
	