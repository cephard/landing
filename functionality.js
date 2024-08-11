function openTask(taskId) {
    if (taskId === 'task1') {
        window.open('https://forms.gle/BgBznU2mDvbbg8mX7', '_blank');
        document.getElementById('task2').disabled = false;
    } else if (taskId === 'task2') {
        document.getElementById('game-container').style.display = 'block';
        document.getElementById('task3').disabled = false;
    } else if (taskId === 'task3') {
        window.open('https://forms.gle/YmaYNuw2M5xH7C9A8', '_blank');
    }
}

