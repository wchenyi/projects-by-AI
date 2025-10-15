// ========== 配置区域 ==========
const QUESTION_FILES = [
    { id: 1, name: '1', file: 'question-data-1.js' },
    { id: 2, name: '2', file: 'question-data-2.js' },
    { id: 3, name: '3', file: 'question-data-3.js' },
    { id: 4, name: '4', file: 'question-data-4.js' },
    { id: 5, name: '5', file: 'question-data-5.js' },
    { id: 6, name: '6', file: 'question-data-6.js' },
];

const ACCESS_KEY = '666666'; // 访问密钥

// ========== 全局变量 ==========
let currentMainQuestion = 1;
let currentSubQuestion = 1;
let allAnswers = {};
let allMarked = {};
let isQuestionFullscreen = false;
let isAnswerFullscreen = false;
let examEnded = false;
let sidebarHidden = false;
let headerHidden = false;

// 计时相关
let seconds = 0;
let timerInterval;
let isPaused = false;
let isCountdown = false;
let totalSeconds = 0;
let timeWarningShown = false;

// 时间记录
let startTime = null;
let questionStartTimes = {}; // 每道大题的开始时间
let questionTimings = {}; // 每道题的用时记录 {mainQ: {total: seconds, subs: {subQ: seconds}}}
let currentQuestionStartTime = null;
let currentSubStartTime = null;

// 用户信息
let userName = '';
let userExamId = '';

// 当前题目数据
let currentQUESTIONS = null;
let currentCASE_MATERIAL = '';
let currentCASE_TITLE = '';
let currentCASE_SUBTITLE = '';

// ========== 密钥验证 ==========
function checkAccessKey() {
    const overlay = document.getElementById('startOverlay');
    const startPanel = overlay.querySelector('.start-panel');
    
    // 添加密钥输入框
    const keyInput = document.createElement('div');
    keyInput.className = 'form-group';
    keyInput.innerHTML = `
        <label for="accessKey">访问密钥 <span style="color: #e74c3c;">*</span></label>
        <input type="password" id="accessKey" required placeholder="请输入访问密钥">
        <div style="font-size: 12px; color: #999; margin-top: 5px;">默认密钥: 666666</div>
    `;
    
    const firstFormGroup = startPanel.querySelector('.form-group');
    firstFormGroup.parentNode.insertBefore(keyInput, firstFormGroup);
}

// ========== 启动页面 ==========
document.getElementById('timerUp').addEventListener('change', function() {
    document.getElementById('countdownInput').disabled = true;
});

document.getElementById('timerDown').addEventListener('change', function() {
    document.getElementById('countdownInput').disabled = false;
});

function startExam(event) {
    event.preventDefault();
    
    // 验证密钥
    const inputKey = document.getElementById('accessKey').value;
    if (inputKey !== ACCESS_KEY) {
        alert('访问密钥错误，请重新输入！');
        return;
    }
    
    userName = document.getElementById('userName').value.trim();
    userExamId = document.getElementById('userExamId').value.trim();
    
    if (!userName || !userExamId) {
        alert('请填写姓名和准考证号！');
        return;
    }
    
    document.getElementById('displayName').textContent = '姓名: ' + userName;
    document.getElementById('displayExamId').textContent = '准考证号: ' + userExamId;
    
    const timerMode = document.querySelector('input[name="timerMode"]:checked').value;
    if (timerMode === 'down') {
        const minutes = parseInt(document.getElementById('countdownInput').value);
        if (!minutes || minutes < 1) {
            alert('请输入有效的倒计时分钟数！');
            return;
        }
        isCountdown = true;
        totalSeconds = minutes * 60;
        seconds = totalSeconds;
        document.getElementById('timerLabel').textContent = '剩余时间';
    } else {
        isCountdown = false;
        seconds = 0;
        document.getElementById('timerLabel').textContent = '答题耗时';
    }
    
    document.getElementById('startOverlay').style.display = 'none';
    initQuestionNumbers();
    startTimer();
    startTime = Date.now();
    loadMainQuestion(1);
}

// ========== 计时器 ==========
function startTimer() {
    timerInterval = setInterval(() => {
        if (!isPaused && !examEnded) {
            if (isCountdown) {
                seconds--;
                if (seconds <= 0) {
                    seconds = 0;
                    clearInterval(timerInterval);
                    endExam();
                    return;
                }
                if (seconds === 600 && !timeWarningShown) {
                    showTimeWarning();
                    timeWarningShown = true;
                }
            } else {
                seconds++;
            }
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    document.getElementById('timeDisplay').textContent = 
        String(hours).padStart(2, '0') + ':' + 
        String(minutes).padStart(2, '0') + ':' + 
        String(secs).padStart(2, '0');
    
    const timerDisplay = document.getElementById('timerDisplay');
    if (isCountdown && seconds <= 600) {
        timerDisplay.classList.add('warning');
    } else {
        timerDisplay.classList.remove('warning');
    }
}

document.getElementById('pauseBtn').addEventListener('click', function() {
    if (examEnded) return;
    isPaused = !isPaused;
    this.textContent = isPaused ? '继续' : '暂停';
    
    // 暂停时禁用答题区
    const answerInput = document.getElementById('answerInput');
    if (isPaused) {
        answerInput.disabled = true;
        answerInput.style.background = '#f5f5f5';
    } else {
        answerInput.disabled = false;
        answerInput.style.background = 'white';
    }
});

function showTimeWarning() {
    document.getElementById('timeWarning').style.display = 'flex';
}

function closeTimeWarning() {
    document.getElementById('timeWarning').style.display = 'none';
}

// ========== 时间记录 ==========
function recordQuestionTime() {
    if (!currentQuestionStartTime) return;
    
    const now = Date.now();
    const elapsed = Math.floor((now - currentQuestionStartTime) / 1000);
    
    if (!questionTimings[currentMainQuestion]) {
        questionTimings[currentMainQuestion] = { total: 0, subs: {} };
    }
    
    questionTimings[currentMainQuestion].total += elapsed;
}

function recordSubQuestionTime() {
    if (!currentSubStartTime) return;
    
    const now = Date.now();
    const elapsed = Math.floor((now - currentSubStartTime) / 1000);
    
    if (!questionTimings[currentMainQuestion]) {
        questionTimings[currentMainQuestion] = { total: 0, subs: {} };
    }
    
    if (!questionTimings[currentMainQuestion].subs[currentSubQuestion]) {
        questionTimings[currentMainQuestion].subs[currentSubQuestion] = 0;
    }
    
    questionTimings[currentMainQuestion].subs[currentSubQuestion] += elapsed;
}

// ========== 题目编号管理 ==========
function initQuestionNumbers() {
    const container = document.getElementById('questionNumbers');
    container.innerHTML = '';
    
    QUESTION_FILES.forEach(item => {
        const btn = document.createElement('div');
        btn.className = 'question-num-btn';
        if (item.id === currentMainQuestion) {
            btn.classList.add('active');
        }
        
        const numSpan = document.createElement('span');
        numSpan.textContent = item.name;
        btn.appendChild(numSpan);
        
        const reqMark = document.createElement('span');
        reqMark.className = 'num-required';
        reqMark.textContent = '*';
        btn.appendChild(reqMark);
        
        btn.onclick = () => {
            if (!examEnded && !isPaused) {
                loadMainQuestion(item.id);
            }
        };
        btn.id = `numBtn-${item.id}`;
        
        container.appendChild(btn);
    });
    
    updateAllMainQuestionMarks();
}

function updateMainQuestionMark(mainQuestionId) {
    const btn = document.getElementById(`numBtn-${mainQuestionId}`);
    if (!btn) return;
    
    const reqMark = btn.querySelector('.num-required');
    const answers = allAnswers[mainQuestionId];
    
    if (answers && Object.keys(answers).length > 0) {
        let allAnswered = true;
        
        // 需要检查该题目有多少个子问题
        const questionFile = QUESTION_FILES.find(q => q.id === mainQuestionId);
        if (questionFile && mainQuestionId === currentMainQuestion && currentQUESTIONS) {
            const totalSubs = Object.keys(currentQUESTIONS).length;
            const answeredSubs = Object.keys(answers).filter(subNum => 
                answers[subNum] && answers[subNum].trim() !== ''
            ).length;
            
            if (answeredSubs === totalSubs) {
                reqMark.style.display = 'none';
            } else {
                reqMark.style.display = 'block';
            }
        }
    } else {
        reqMark.style.display = 'block';
    }
}

function updateAllMainQuestionMarks() {
    QUESTION_FILES.forEach(item => {
        updateMainQuestionMark(item.id);
    });
}

// ========== 题目加载 ==========
function loadMainQuestion(mainQuestionId) {
    const questionFile = QUESTION_FILES.find(q => q.id === mainQuestionId);
    if (!questionFile) {
        alert('题目不存在！');
        return;
    }
    
    // 记录当前题目和子问题的时间
    recordSubQuestionTime();
    recordQuestionTime();
    
    if (currentMainQuestion && currentSubQuestion) {
        saveCurrentAnswer();
    }
    
    currentMainQuestion = mainQuestionId;
    currentQuestionStartTime = Date.now();
    
    const oldScript = document.getElementById('questionScript');
    if (oldScript) {
        oldScript.remove();
    }
    
    const script = document.createElement('script');
    script.id = 'questionScript';
    script.src = questionFile.file;
    script.onload = function() {
        currentQUESTIONS = window.QUESTIONS;
        currentCASE_MATERIAL = window.CASE_MATERIAL;
        currentCASE_TITLE = window.CASE_TITLE;
        currentCASE_SUBTITLE = window.CASE_SUBTITLE;
        
        initQuestionTabs();
        switchSubQuestion(1);
        updateQuestionNumbers();
    };
    script.onerror = function() {
        alert('题目文件加载失败：' + questionFile.file + '\n请确保文件存在！');
    };
    
    document.body.appendChild(script);
}

function updateQuestionNumbers() {
    document.querySelectorAll('.question-num-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(`numBtn-${currentMainQuestion}`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// ========== 子问题管理 ==========
function initQuestionTabs() {
    const tabsContainer = document.getElementById('questionTabs');
    tabsContainer.innerHTML = '';
    
    if (!currentQUESTIONS) return;
    
    Object.keys(currentQUESTIONS).forEach(num => {
        const button = document.createElement('button');
        button.className = 'question-tab';
        if (num == currentSubQuestion) {
            button.classList.add('active');
        }
        
        button.innerHTML = `问题(${num})<span class="required-mark">*</span>`;
        button.onclick = () => {
            if (!examEnded && !isPaused) {
                switchSubQuestion(parseInt(num));
            }
        };
        button.id = `tab-${num}`;
        
        if (allMarked[currentMainQuestion] && allMarked[currentMainQuestion].has(parseInt(num))) {
            button.classList.add('marked');
        }
        
        tabsContainer.appendChild(button);
    });
    
    Object.keys(currentQUESTIONS).forEach(num => {
        updateRequiredMark(parseInt(num));
    });
}

function saveCurrentAnswer() {
    const answerText = document.getElementById('answerInput').value;
    
    if (!allAnswers[currentMainQuestion]) {
        allAnswers[currentMainQuestion] = {};
    }
    allAnswers[currentMainQuestion][currentSubQuestion] = answerText;
    
    updateRequiredMark(currentSubQuestion);
    updateMainQuestionMark(currentMainQuestion);
}

function updateRequiredMark(subQuestionNum) {
    const tab = document.getElementById(`tab-${subQuestionNum}`);
    if (tab) {
        const mark = tab.querySelector('.required-mark');
        const answer = allAnswers[currentMainQuestion] && allAnswers[currentMainQuestion][subQuestionNum];
        if (answer && answer.trim().length > 0) {
            mark.style.display = 'none';
        } else {
            mark.style.display = 'inline';
        }
    }
}

function switchSubQuestion(subQuestionNum) {
    // 记录当前子问题的时间
    recordSubQuestionTime();
    
    saveCurrentAnswer();
    
    currentSubQuestion = subQuestionNum;
    currentSubStartTime = Date.now();
    
    const question = currentQUESTIONS[subQuestionNum];
    const contentDiv = document.getElementById('questionContent');
    
    contentDiv.innerHTML = `
        <div class="material-section">
            <div class="question-title">${currentCASE_TITLE}</div>
            <div style="margin-bottom: 10px;">${currentCASE_SUBTITLE}</div>
            <p>${currentCASE_MATERIAL.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>')}</p>
        </div>
        <div class="problems-section">
            <div style="font-weight: bold; margin-bottom: 15px;">【问题】</div>
            ${Object.keys(currentQUESTIONS).map(num => 
                `<div class="problem-item">${currentQUESTIONS[num].fullContent}</div>`
            ).join('')}
        </div>
    `;

    document.querySelectorAll('.question-tab').forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === subQuestionNum);
    });

    document.getElementById('currentQuestion').textContent = question.title;
    
    const savedAnswer = allAnswers[currentMainQuestion] && allAnswers[currentMainQuestion][subQuestionNum];
    document.getElementById('answerInput').value = savedAnswer || '';
    
    const isMarked = allMarked[currentMainQuestion] && allMarked[currentMainQuestion].has(subQuestionNum);
    document.getElementById('markCheckbox').checked = isMarked;
    
    updateCharCount();
}

// ========== 答题功能 ==========
function updateCharCount() {
    const text = document.getElementById('answerInput').value;
    document.getElementById('charCount').textContent = text.length;
    updateRequiredMark(currentSubQuestion);
    updateMainQuestionMark(currentMainQuestion);
}

function toggleMark() {
    if (examEnded || isPaused) return;
    
    const isMarked = document.getElementById('markCheckbox').checked;
    const tab = document.getElementById(`tab-${currentSubQuestion}`);
    
    if (!allMarked[currentMainQuestion]) {
        allMarked[currentMainQuestion] = new Set();
    }
    
    if (isMarked) {
        allMarked[currentMainQuestion].add(currentSubQuestion);
        tab.classList.add('marked');
    } else {
        allMarked[currentMainQuestion].delete(currentSubQuestion);
        tab.classList.remove('marked');
    }
}

function handleAnswerInput(event) {
    if (examEnded) {
        event.preventDefault();
        showEditWarning();
        return;
    }
    
    if (isPaused) {
        event.preventDefault();
        return;
    }
}

document.getElementById('answerInput').addEventListener('input', function(e) {
    if (examEnded) {
        e.preventDefault();
        showEditWarning();
        const savedAnswer = allAnswers[currentMainQuestion] && allAnswers[currentMainQuestion][currentSubQuestion];
        this.value = savedAnswer || '';
        return;
    }
    
    if (isPaused) {
        e.preventDefault();
        const savedAnswer = allAnswers[currentMainQuestion] && allAnswers[currentMainQuestion][currentSubQuestion];
        this.value = savedAnswer || '';
        return;
    }
});

document.getElementById('answerInput').addEventListener('keydown', function(e) {
    if (isPaused || examEnded) {
        e.preventDefault();
        if (isPaused) {
            alert('时间已暂停，请恢复计时后再继续答题！');
        }
        return;
    }
});

function showEditWarning() {
    const warning = document.getElementById('editWarning');
    warning.style.display = 'block';
    setTimeout(() => {
        warning.style.display = 'none';
    }, 2000);
}

document.addEventListener('click', function(e) {
    const warning = document.getElementById('editWarning');
    if (warning.style.display === 'block' && !warning.contains(e.target)) {
        warning.style.display = 'none';
    }
});

// ========== 界面控制 ==========
function toggleQuestionFullscreen() {
    const wrapper = document.getElementById('questionWrapper');
    const btn = document.getElementById('questionFullscreenText');
    isQuestionFullscreen = !isQuestionFullscreen;
    
    if (isQuestionFullscreen) {
        wrapper.classList.add('fullscreen');
        btn.textContent = '缩小窗口';
    } else {
        wrapper.classList.remove('fullscreen');
        btn.textContent = '放大窗口';
    }
}

function toggleAnswerFullscreen() {
    const wrapper = document.getElementById('answerWrapper');
    const btn = document.getElementById('answerFullscreenText');
    isAnswerFullscreen = !isAnswerFullscreen;
    
    if (isAnswerFullscreen) {
        wrapper.classList.add('fullscreen');
        btn.textContent = '缩小';
    } else {
        wrapper.classList.remove('fullscreen');
        btn.textContent = '放大';
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const btn = document.getElementById('sidebarBtnText');
    sidebarHidden = !sidebarHidden;
    
    if (sidebarHidden) {
        sidebar.classList.add('hidden');
        btn.textContent = '显示';
    } else {
        sidebar.classList.remove('hidden');
        btn.textContent = '隐藏';
    }
}

function toggleHeader() {
    const header = document.getElementById('header');
    const container = document.getElementById('container');
    const toggleBtn = document.getElementById('toggleSidebarBtn');
    headerHidden = !headerHidden;
    
    if (headerHidden) {
        header.classList.add('hidden');
        container.classList.add('header-hidden');
        
        // 显示恢复按钮
        if (!document.getElementById('showHeaderBtn')) {
            const showBtn = document.createElement('button');
            showBtn.id = 'showHeaderBtn';
            showBtn.textContent = '显示顶栏';
            showBtn.style.cssText = 'position: fixed; top: 0; left: 50%; transform: translateX(-50%); z-index: 60; background: #4a90e2; color: white; border: none; padding: 5px 15px; cursor: pointer; border-radius: 0 0 4px 4px;';
            showBtn.onclick = toggleHeader;
            document.body.appendChild(showBtn);
        }
    } else {
        header.classList.remove('hidden');
        container.classList.remove('header-hidden');
        
        // 移除恢复按钮
        const showBtn = document.getElementById('showHeaderBtn');
        if (showBtn) {
            showBtn.remove();
        }
    }
}

function changeStyle() {
    const style = document.getElementById('styleSelect').value;
    const wrapper = document.querySelector('.question-wrapper');
    
    if (style === 'dark') {
        wrapper.style.background = '#f5f5dc';
    } else if (style === 'classic') {
        wrapper.style.background = '#fffaf0';
    } else {
        wrapper.style.background = 'white';
    }
}

function changeFont() {
    const font = document.getElementById('fontSelect').value;
    document.querySelector('.question-content').style.fontFamily = font;
    document.getElementById('answerInput').style.fontFamily = font;
}

function changeFontSize() {
    const size = document.getElementById('fontSizeSelect').value;
    document.querySelector('.question-content').style.fontSize = size + 'px';
}

// ========== 交卷和结束 ==========
function submitExam() {
    if (examEnded) return;
    
    saveCurrentAnswer();
    recordSubQuestionTime();
    recordQuestionTime();
    
    if (confirm('确定要交卷吗？')) {
        endExam();
    }
}

function endExam() {
    examEnded = true;
    clearInterval(timerInterval);
    document.getElementById('pauseBtn').disabled = true;
    
    // 生成答题统计
    showExamSummary();
}

function showExamSummary() {
    const summaryDiv = document.createElement('div');
    summaryDiv.className = 'exam-summary';
    summaryDiv.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 30px; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); z-index: 2001; max-width: 600px; max-height: 80vh; overflow-y: auto;';
    
    let summaryHTML = '<h2 style="text-align: center; margin-bottom: 20px;">答题统计</h2>';
    
    // 总用时
    const totalTime = formatTime(isCountdown ? (totalSeconds - seconds) : seconds);
    summaryHTML += `<div style="margin-bottom: 20px; padding: 15px; background: #f5f5f5; border-radius: 8px;">`;
    summaryHTML += `<strong>总用时：</strong>${totalTime}</div>`;
    
    // 每道大题的统计
    summaryHTML += '<div style="margin-top: 20px;">';
    QUESTION_FILES.forEach(item => {
        const timing = questionTimings[item.id];
        const answers = allAnswers[item.id];
        
        summaryHTML += `<div style="margin: 15px 0; padding: 15px; border: 1px solid #ddd; border-radius: 8px;">`;
        summaryHTML += `<strong>第${item.name}题：</strong>`;
        
        if (timing) {
            summaryHTML += `用时 ${formatTime(timing.total)}<br>`;
            if (timing.subs && Object.keys(timing.subs).length > 0) {
                summaryHTML += '<div style="margin-left: 20px; margin-top: 10px; font-size: 14px;">';
                Object.keys(timing.subs).forEach(subNum => {
                    summaryHTML += `问题(${subNum})：${formatTime(timing.subs[subNum])}<br>`;
                });
                summaryHTML += '</div>';
            }
        } else {
            summaryHTML += '<span style="color: #999;">未作答</span><br>';
        }
        
        // 检查未答题
        if (answers) {
            const unanswered = [];
            // 这里简化处理，实际需要知道每题有多少个子问题
            Object.keys(answers).forEach(subNum => {
                if (!answers[subNum] || answers[subNum].trim() === '') {
                    unanswered.push(subNum);
                }
            });
            
            if (unanswered.length > 0) {
                summaryHTML += `<div style="color: #e74c3c; margin-top: 10px;">未答小题：${unanswered.join(', ')}</div>`;
            }
        } else {
            summaryHTML += `<div style="color: #e74c3c; margin-top: 10px;">本题未作答</div>`;
        }
        
        summaryHTML += '</div>';
    });
    summaryHTML += '</div>';
    
    summaryHTML += `
        <div style="margin-top: 30px; display: flex; gap: 15px; justify-content: center;">
            <button onclick="returnHome()" style="padding: 10px 25px; background: #ff9800; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: bold;">返回主页</button>
            <button onclick="reviewAnswers()" style="padding: 10px 25px; background: #4caf50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: bold;">检查答案</button>
        </div>
    `;
    
    summaryDiv.innerHTML = summaryHTML;
    document.body.appendChild(summaryDiv);
}

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function returnHome() {
    // 移除统计面板
    const summary = document.querySelector('.exam-summary');
    if (summary) {
        summary.remove();
    }
    
    // 重置所有数据
    examEnded = false;
    currentMainQuestion = 1;
    currentSubQuestion = 1;
    allAnswers = {};
    allMarked = {};
    questionTimings = {};
    seconds = 0;
    isPaused = false;
    timeWarningShown = false;
    sidebarHidden = false;
    headerHidden = false;
    
    document.getElementById('userName').value = '';
    document.getElementById('userExamId').value = '';
    document.getElementById('accessKey').value = '';
    document.getElementById('countdownInput').value = '';
    document.getElementById('timerUp').checked = true;
    document.getElementById('countdownInput').disabled = true;
    
    document.getElementById('startOverlay').style.display = 'flex';
    
    document.getElementById('displayName').textContent = '姓名: 未设置';
    document.getElementById('displayExamId').textContent = '准考证号: 未设置';
    document.getElementById('pauseBtn').disabled = false;
    document.getElementById('pauseBtn').textContent = '暂停';
    document.getElementById('answerInput').disabled = false;
    document.getElementById('answerInput').style.background = 'white';
    
    if (sidebarHidden) toggleSidebar();
    if (headerHidden) {
        const showBtn = document.getElementById('showHeaderBtn');
        if (showBtn) showBtn.remove();
        document.getElementById('header').classList.remove('hidden');
        document.getElementById('container').classList.remove('header-hidden');
    }
}

function reviewAnswers() {
    // 移除统计面板
    const summary = document.querySelector('.exam-summary');
    if (summary) {
        summary.remove();
    }
    
    document.getElementById('answerInput').disabled = false;
    document.getElementById('answerInput').style.background = '#f5f5f5';
    alert('现在可以查看答案，但不能修改。');
}

// ========== 初始化 ==========
window.addEventListener('DOMContentLoaded', function() {
    checkAccessKey();
    console.log('法考刷题系统已加载');
});
