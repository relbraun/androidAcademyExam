const topNStudentsAttendees = (students, attendees, N) => {
    const attendObj = {};
    students.forEach(s => attendObj[s] = 0);
	attendees.forEach(a => {
        const courseAttendees = Array.from(new Set(a)); //remove duplicates
        courseAttendees.forEach(ca => attendObj[ca]++);
        
})
return Object.entries(attendObj).sort((a,b) => b[1]-a[1]).map(i => i[0]).slice(0,N);
}
