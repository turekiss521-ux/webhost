document.addEventListener('DOMContentLoaded', function() {
    // --- 配置区域 ---
    // 请将 '你的GitHub用户名' 替换为你的真实GitHub用户名
    const githubUsername = 'turekiss521-ux'; 
    // 如果你的仓库名不是 'webphoto'，请在这里修改
    const repoName = 'webhost'; 
    // 存放照片的文件夹名
    const photoDir = 'photo'; 
    // --- 配置结束 ---

    const gallery = document.getElementById('gallery');
    const apiUrl = `https://api.github.com/repos/${githubUsername}/${repoName}/contents/${photoDir}`;

    fetch(apiUrl )
        .then(response => {
            if (!response.ok) {
                throw new Error('无法从GitHub获取照片列表。请检查用户名、仓库名和文件夹是否正确。');
            }
            return response.json();
        })
        .then(data => {
            // 清空加载提示
            gallery.innerHTML = ''; 

            // 筛选出图片文件 (jpg, jpeg, png, gif, webp)
            const imageFiles = data.filter(file => 
                /\.(jpe?g|png|gif|webp)$/i.test(file.name)
            );

            if (imageFiles.length === 0) {
                gallery.innerHTML = '<p class="loading">此文件夹中没有找到任何照片。</p>';
                return;
            }

            // 遍历图片文件并创建HTML元素
            imageFiles.forEach(file => {
                const item = document.createElement('div');
                item.className = 'gallery-item';

                const img = document.createElement('img');
                // 使用 file.download_url 获取图片的原始链接
                img.src = file.download_url; 
                img.alt = file.name;

                item.appendChild(img);
                gallery.appendChild(item);
            });
        })
        .catch(error => {
            console.error('加载照片时出错:', error);
            gallery.innerHTML = `<p class="loading">加载失败：${error.message}</p>`;
        });
});
