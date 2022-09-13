export function convertMinutesToHourString(time: number): string {
	const hours = Math.floor(time / 60);
	const minutes = time % 60;

	return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}
