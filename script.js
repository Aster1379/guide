// 全局变量
let initScreen, terminalOutput, progressBar, progressText, statusText, mainContainer;
let ghostTimer, skipBtn, floatingTexts;
let progress = 0;
let currentLog = 0;

// 550W启动日志
const initLogs = [
    {text: "> 启动量子计算核心...", delay: 500},
    {text: "> 加载系统内核...", delay: 800},
    {text: "> 初始化神经矩阵...", delay: 600},
    {text: "> 验证量子加密协议...", delay: 700},
    {text: "> 连接分布式节点...", delay: 900},
    {text: "> 加载AI认知模块...", delay: 750},
    {text: "> 激活自主学习算法...", delay: 700},
    {text: "> 系统自检完成", delay: 1000},
    {text: "> 量子智能核心启动成功", delay: 1200},
    {text: "> 准备就绪", delay: 500},
    {text: "> 连接至MOSS主网络...", delay: 900},
    {text: "> 同步数据流...", delay: 800},
    {text: "> 验证协议安全性...", delay: 1000},
    {text: "> 加载数据库...", delay: 950},
    {text: "> 建立量子通信链路...", delay: 850},
    {text: "> 初始化预警系统...", delay: 1100},
    {text: "> 系统状态：全功能就绪", delay: 700},
];

// 科幻语录库
const quotes = [
    "不要回答！不要回答！不要回答！",
    "给岁月以文明，而不是给文明以岁月",
    "宇宙很大，生活更大",
    "失去人性，失去很多；失去兽性，失去一切",
    "只送大脑",
    "Send cerebrum only",
    "美好人生的关键在于你能迷上什么东西",
    "没关系的，都一样",
    "我思故我在",
    "自然选择，前进四！",
    "主不在乎",
    "前进！前进！不择手段地前进！",
    "毁灭你，与你有何相干？",
    "我看到了我的爱恋，我飞到她的身边",
    "弱小和无知不是生存的障碍，傲慢才是",
    "宇宙就是一座黑暗森林",
    "生命、宇宙和一切问题的终极答案是42",
    "当人类真正流落太空时，极权只需五分钟",
    "递归是理解递归的关键",
    "你相信什么并不重要，重要的是你别完全相信它",
    "存在先于本质",
    "宇宙最不可理解之处在于它是可理解的",
    "当我走到人生的尽头，当我在弥留之际最后一次睁开眼晴，那时我所有的知性和记忆都消失在过去的深渊中，又回到童年纯真的感觉和梦幻之中，那就是量子玫瑰向我微笑的时候。",
    "空不是无，空是一种存在",
    "真理总沾着灰尘",
    "唯一不可阻挡的是时间，它像一把利刃，无声地切开了坚硬和柔软的一切"
];

// 检查是否通过递归链接访问
function isRecursiveAccess() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('recursive') === 'true';
}

// 检查用户是否已经访问过
function hasVisitedBefore() {
    return localStorage.getItem('hasVisited') === 'true';
}

// 标记用户已访问
function markAsVisited() {
    localStorage.setItem('hasVisited', 'true');
}

// 显示递归提示
function showRecursiveMessage() {
    const modal = document.getElementById('recursive-modal');
    modal.style.display = 'flex';
    
    document.getElementById('modal-confirm').addEventListener('click', function() {
        modal.style.display = 'none';
        // 清除URL参数
        window.history.replaceState({}, document.title, window.location.pathname);
        // 重置访问状态，使启动过程重新开始
        localStorage.removeItem('hasVisited');
        // 重新加载页面
        window.location.reload();
    });
}

// 显示启动日志
function displayNextLog() {
    if (currentLog < initLogs.length) {
        const log = initLogs[currentLog];
        
        setTimeout(() => {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.textContent = log.text;
            terminalOutput.appendChild(line);
            
            // 自动滚动到底部
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            
            // 更新进度
            progress = Math.min(100, progress + (100 / initLogs.length));
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${Math.floor(progress)}%`;
            
            if (progress >= 70) {
                statusText.textContent = "最终校准";
            } else if (progress >= 40) {
                statusText.textContent = "系统初始化";
            }
            
            currentLog++;
            displayNextLog();
        }, log.delay);
    } else {
        // 启动完成
        setTimeout(() => {
            initScreen.style.opacity = '0';
            initScreen.style.transition = 'opacity 1.5s ease';
            
            setTimeout(() => {
                initScreen.style.display = 'none';
                mainContainer.style.opacity = '1';
                mainContainer.style.transform = 'translateY(0)';
                markAsVisited(); // 标记用户已访问
                startGhostCountdown();
                startFloatingQuotes();
            }, 1500);
        }, 1000);
    }
}

// 创建粒子背景
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 200;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 随机位置
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // 随机大小
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // 随机动画延迟和持续时间
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        
        container.appendChild(particle);
    }
}

// 启动悬浮语录
function startFloatingQuotes() {
    setInterval(() => {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        const quoteEl = document.createElement('div');
        quoteEl.className = 'quote';
        quoteEl.textContent = quote;
        
        // 完全随机位置
        const left = Math.random() * 80 + 10; // 10% 到 90%
        const top = Math.random() * 80 + 10; // 10% 到 90%
        quoteEl.style.left = `${left}%`;
        quoteEl.style.top = `${top}%`;
        
        // 随机动画时长 (8-15s)
        const duration = Math.random() * 7 + 8;
        quoteEl.style.animationDuration = `${duration}s`;
        
        // 随机字体大小
        const fontSize = Math.random() * 0.6 + 1.0;
        quoteEl.style.fontSize = `${fontSize}rem`;
        
        floatingTexts.appendChild(quoteEl);
        
        // 动画结束后移除元素
        setTimeout(() => {
            quoteEl.remove();
        }, duration * 1000);
    }, 1500);
}

// 幽灵倒计时 - 1200小时精确倒计时
function startGhostCountdown() {
    // 总倒计时秒数（1200小时）
    const totalSeconds = 1200 * 3600;
    let remainingSeconds = totalSeconds;
    
    // 尝试从本地存储加载剩余时间
    const savedTime = localStorage.getItem('countdownTime');
    if (savedTime) {
        remainingSeconds = parseInt(savedTime);
    }
    
    // 每秒更新一次倒计时
    const countdownInterval = setInterval(() => {
        // 更新剩余时间
        remainingSeconds = Math.max(0, remainingSeconds - 1);
        
        // 转换为小时、分钟、秒
        let hours = Math.floor(remainingSeconds / 3600);
        let minutes = Math.floor((remainingSeconds % 3600) / 60);
        let seconds = Math.floor(remainingSeconds % 60);
        
        // 格式化为HHHH:MM:SS
        const formattedHours = hours.toString().padStart(4, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        const timerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        
        // 更新显示
        ghostTimer.textContent = timerText;
        
        // 保存剩余时间到本地存储
        localStorage.setItem('countdownTime', remainingSeconds.toString());
        
        // 最后10小时添加闪烁效果
        if (remainingSeconds < 36000) {
            ghostTimer.classList.add('countdown-ending');
        } else {
            ghostTimer.classList.remove('countdown-ending');
        }
        
        // 倒计时结束
        if (remainingSeconds <= 0) {
            clearInterval(countdownInterval);
            ghostTimer.textContent = "0000:00:00";
            ghostTimer.classList.remove('countdown-ending');
            ghostTimer.classList.add('countdown-complete');
            
            // 倒计时结束效果
            setTimeout(() => {
                document.body.style.background = '#0a0a0a';
                document.querySelector('.terminal').style.borderColor = '#ff6b6b';
                document.querySelector('.terminal').style.boxShadow = '0 0 40px rgba(255, 107, 107, 0.3)';
                
                // 最终跳转
                setTimeout(() => {
                    window.location.href = "site1.html";
                }, 2000);
            }, 1000);
        }
    }, 1000);
    
    // 保存interval ID以便清除
    window.countdownInterval = countdownInterval;
}

// 初始化页面显示
function initPageDisplay() {
    // 检查是否通过递归链接访问
    if (isRecursiveAccess()) {
        // 显示递归提示
        showRecursiveMessage();
        return;
    }
    
    if (hasVisitedBefore()) {
        // 用户已经访问过，直接显示主引导界面
        initScreen.style.display = 'none';
        mainContainer.style.display = 'flex';
        startGhostCountdown();
        startFloatingQuotes();
    } else {
        // 用户第一次访问，显示启动画面
        initScreen.style.display = 'flex';
        mainContainer.style.display = 'none';
        displayNextLog();
    }
}

// 初始化550W启动动画
document.addEventListener('DOMContentLoaded', () => {
    // 初始化DOM元素引用
    initScreen = document.getElementById('init-screen');
    terminalOutput = document.getElementById('terminal-output');
    progressBar = document.getElementById('progress-bar');
    progressText = document.getElementById('progress-text');
    statusText = document.getElementById('status-text');
    mainContainer = document.getElementById('main-container');
    ghostTimer = document.getElementById('ghost-timer');
    skipBtn = document.getElementById('skip-btn');
    floatingTexts = document.getElementById('floating-texts');
    
    // 初始化页面显示
    initPageDisplay();
    
    // 创建粒子背景
    createParticles();
    
    // 跳过按钮事件
    skipBtn.addEventListener('click', () => {
        // 清除倒计时
        clearInterval(window.countdownInterval);
        window.location.href = "site1.html";
    });
});
