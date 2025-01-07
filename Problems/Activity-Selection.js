

const activitySelection = (activities) => {
    activities.sort((a, b) => a.end - b.end);

    const selectedActivities = [];
    let lastEndTime = 0;

    for (const activity of activities) {
        if (activity.start >= lastEndTime) {
            selectedActivities.push(activity);
            lastEndTime = activity.end;
        }
    }

    return selectedActivities;
};

const activities = [
    { start: 1, end: 3 },
    { start: 2, end: 5 },
    { start: 4, end: 6 },
    { start: 6, end: 8 },
    { start: 5, end: 9 },
    { start: 8, end: 10 }
];

const result = activitySelection(activities);

console.log("Selected Activities:");
result.forEach((activity, index) =>
    console.log(`Activity ${index + 1}: Start = ${activity.start}, End = ${activity.end}`)
);