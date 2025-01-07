

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