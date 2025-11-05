document.addEventListener('DOMContentLoaded', function() {
    // --- 配置区域 ---
    // 1. 请将 '你的GitHub用户名' 替换为你的真实GitHub用户名
    const githubUsername = 'turekiss521-ux'; 
    
    // 2. 请将 'webphoto' 替换为你的仓库名 (如果没改，就不用动)
    const repoName = 'webhost'; 
    
    // 3. 请将 '你的图片文件名.jpg' 替换为你要展示的那张图片的文件名
    const imageName = '动漫篇（2）.jpg'; 
    // --- 配置结束 ---

    // 构建图片的直接访问URL
    const imageUrl = `https://raw.githubusercontent.com/${githubUsername}/${repoName}/main/${imageName}`;

    // 将URL设置到图片元素的src属性上
    const imgElement = document.getElementById('displayImage' );
    if (imgElement) {
        imgElement.src = imageUrl;
    }
});
