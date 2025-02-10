// Firebase references
const tasksCollection = db.collection('tasks');
const adsCollection = db.collection('ads');

// Task management functions
function addTask() {
    const taskName = prompt("Enter task name:");
    const taskReward = prompt("Enter reward for completing the task (coins):");
    
    if (taskName && taskReward) {
        tasksCollection.add({
            name: taskName,
            reward: taskReward,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert('Task added successfully!');
        }).catch(error => {
            alert('Error adding task: ' + error.message);
        });
    }
}

function viewTasks() {
    tasksCollection.get().then(snapshot => {
        let tasksList = '';
        snapshot.forEach(doc => {
            const task = doc.data();
            tasksList += `<div>${task.name} - Reward: ${task.reward} coins</div>`;
        });
        alert(tasksList || 'No tasks available.');
    }).catch(error => {
        alert('Error fetching tasks: ' + error.message);
    });
}

// Ads management functions
function addAd() {
    const adContent = prompt("Enter ad content (URL or Text):");
    
    if (adContent) {
        adsCollection.add({
            content: adContent,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert('Ad added successfully!');
        }).catch(error => {
            alert('Error adding ad: ' + error.message);
        });
    }
}

function viewAds() {
    adsCollection.get().then(snapshot => {
        let adsList = '';
        snapshot.forEach(doc => {
            const ad = doc.data();
            adsList += `<div>${ad.content}</div>`;
        });
        alert(adsList || 'No ads available.');
    }).catch(error => {
        alert('Error fetching ads: ' + error.message);
    });
}

// Task Update System (3-hour interval for updates)
function taskUpdateSystem() {
    alert('Tasks will be updated every 3 hours.');
    // You can implement actual task updates or notifications here
}
