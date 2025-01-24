

const greedyActivitySelector = (activities) => {
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
    { start: 9, end: 12 },
    { start: 2, end: 7 },
    { start: 8, end: 11 },
    { start: 3, end: 6 },
    { start: 7, end: 10 },
    { start: 0, end: 2 },
    { start: 4, end: 5 },
    { start: 1, end: 4 },
    { start: 1, end: 3 },
];

const result = greedyActivitySelector(activities);

console.log("Selected Activities:");
result.forEach((activity, index) =>
    console.log(`Activity ${index + 1}: Start = ${activity.start}, End = ${activity.end}`)
);